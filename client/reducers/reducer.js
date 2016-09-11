var initialState = require('./initialState')
var combineReducers = require('redux').combineReducers
var levelGrids = require('../levels/levelGrids')

function reducer (state = initialState, action) {

  var newState = Object.assign({}, state)
  var { tileGrid, enemies, player } = newState
  var i = state.player.position.y
  var j = state.player.position.x
  var nextTile

  var nextLevelFunc = function() {
    newState.currentLevel ++
    if (newState.currentLevel == 5){
      newState.display = "win"
      return newState
    }
    newState.tileGrid = levelGrids[newState.currentLevel-2]
    return newState
  }

  var isEnemyAdjacent = function(enemy) {
    var {x, y } = enemy.position
    return  (x == j+1 && y == i || x == j-1 && y == i || x == j && y == i-1 || x == j && y == i+1  )
  }

  switch(action.type){

    //these are the cases for player movement

    case 'PLAYER_MOVE':
        var { y, x} = action.payload
        nextTile = tileGrid[y][x]
        if (nextTile == 1 || nextTile == 2) {
          newState.player.position.x = x
          newState.player.position.y = y
        } else if (nextTile == 3) {
          nextLevelFunc()
        }
        return newState

    //these are the cases for the player attacking

    case 'PLAYER_ATTACK':


      var attackedEnemy = newState.enemies.find(function(enemy){
        return enemy.position.x == action.payload.position.x && enemy.position.y == action.payload.position.y
      })
      attackedEnemy.health --
      newState.loggedMessages.push(action.payload.messages.playerAttacks)
      newState.loggedMessages = newState.loggedMessages.slice(0)
      if (attackedEnemy.health <= 0) {
        var enemyIndex = newState.enemies.findIndex(function(enemy){
          return enemy.position.x == action.payload.position.x && enemy.position.y == action.payload.position.y
        })
        newState.enemies.splice(enemyIndex, 1)
        newState.loggedMessages.push(action.payload.messages.enemyDefeated)
        newState.loggedMessages = newState.loggedMessages.slice(0)
      }
      return newState

    //these are the cases for enemies attacking

    case 'ALL_ENEMIES_ACT':
      enemies.map(function(enemy){
        if(isEnemyAdjacent(enemy)){
               player.health--
          }
      })
      return newState

    //these are the cases for game running
    case 'START_GAME':
      newState.display = "game"
      return newState

    case 'WIN_GAME':
      newState.display = "win"
      return newState

    case 'LOSE_GAME':
      newState.display = "loss"
      return newState

    default:
      return state
  }
}

module.exports = reducer
