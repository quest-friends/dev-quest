var initialState = require('./initialState')
var combineReducers = require('redux').combineReducers
var levelGrids = require('../levels/levelGrids')

function reducer (state = initialState, action) {

  var newState = Object.assign({}, state)
  var { tileGrid, enemies, player } = newState
  var i = state.player.position.y
  var j = state.player.position.x
  var nextTile

  const nextLevelFunc = () => {
    newState.currentLevel ++
    if (newState.currentLevel == 5){
      newState.display = "win"
      return newState
    }
    newState.tileGrid = levelGrids[newState.currentLevel-2]
    return newState
  }

  const moveTowardsPlayer = (enemy) => {
    if (j > enemy.position.x){
      enemy.position.x++
      return
    }if (j < enemy.position.x){
      enemy.position.x--
      return
    }if (i < enemy.position.y){
      enemy.position.y--
      return
    }if (i > enemy.position.y){
      enemy.position.y++
      return
    }
  }

  switch(action.type){

    //these are the cases for player movement
    case 'PLAYER_MOVE_LEFT':
      nextTile = tileGrid[i][j-1]
      if (nextTile == 1 || nextTile == 2) {
        newState.player.position.x -= 1
      }

      else if (nextTile == 3) {
        nextLevelFunc()
      }
      return newState

    case 'PLAYER_MOVE_RIGHT':
      nextTile = tileGrid[i][j+1]
      if (nextTile == 1 || nextTile == 2) {
        newState.player.position.x += 1
      } else if (nextTile == 3) {
        nextLevelFunc()
      }
      return newState

    case 'PLAYER_MOVE_UP':
      nextTile = tileGrid[i-1][j]
      if (nextTile == 1 || nextTile == 2) {
        newState.player.position.y -= 1
      } else if (nextTile == 3) {
        nextLevelFunc()
      }
      return newState

    case 'PLAYER_MOVE_DOWN':
      nextTile = tileGrid[i+1][j]
      if (nextTile == 1 || nextTile == 2) {
        newState.player.position.y += 1
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
      if (attackedEnemy.health == 0) {
        var enemyIndex = newState.enemies.findIndex(function(enemy){
          return enemy.position.x == action.payload.position.x && enemy.position.y == action.payload.position.y
        })
        newState.enemies.splice(enemyIndex, 1)
      }
      console.log('attacking', action.payload)
      return newState

    //these are the cases for enemies attacking

    case 'ALL_ENEMIES_ACT':
      enemies.map(function(enemy){
        //this needs to go through the enemies and tell them all to act, and the enemy should handle the logic?
        //because each enemy is a simple object, handling the logic in here for now. COULD GET BULKY
        // thought: could this action just make each enemy dispatch an action of its own?

        if(enemy.type == 'chrome')  {
          moveTowardsPlayer(enemy)
        }

        if(  enemy.position.x == j+1 && enemy.position.y == i ||
             enemy.position.x == j-1 && enemy.position.y == i ||
             enemy.position.x == j && enemy.position.y == i-1 ||
             enemy.position.x == j && enemy.position.y == i+1    ){
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
