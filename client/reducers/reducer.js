var initialState = require('./initialState')
var combineReducers = require('redux').combineReducers
var levelGrids = require('../levels/levelGrids')

function reducer (state = initialState, action) {

  var newState = Object.assign({}, state)
  var { tileGrid, enemies, player } = newState
  //can we refactor these i and j things? it seems like they
  //should be taken out of newState and then directly modified
  // could destructure them?
  var i = state.player.position.y
  var j = state.player.position.x
  var nextTile

function moveLeft (enemy) {
  enemy.position.x --
}

function moveRight (enemy) {
  enemy.position.x ++
}

function moveUp (enemy) {
  enemy.position.y --
}

function moveDown (enemy) {
  enemy.position.y ++
}

function moveTowardsPlayer(enemy) {
    var {x, y} = enemy.position
    var presentEnemy
    //psuedocode:
    // the case where the player is adjacent to the enemy should already have been handled. So:
    // first implementation,
    // if the enemy's x is greater than the players
    //  check if the square to the left is a room tile
    //  if  it is, move left
    nextTile = tileGrid[y][x-1]
    presentEnemy = enemies.find(function(enemy){return enemy.position.x==x-1 && enemy.position.y==y})
    if (j < x && nextTile == 1 && !presentEnemy){
      moveLeft(enemy)
    }
    // else
    // if the enemy's x is less than the players
    //  check if the square to the right is a room tile
    //  if it is, move right
    presentEnemy = enemies.find(function(enemy){return enemy.position.x==x+1 && enemy.position.y==y})
    if (j > x && tileGrid[y][x+1] == 1 && !presentEnemy){
      moveRight(enemy)
    }
    // else
    // if the enemy's y is less than the players
    //  check if the square to the bottom is a room tile
    //  if it is, move down
    presentEnemy = enemies.find(function(enemy){return enemy.position.x==x && enemy.position.y==y+1})
    if (i > y && tileGrid[y+1][x] == 1 && !presentEnemy){
      moveDown(enemy)
    }
    // else
    // if the enemy's y is greater than the players
    //  check if the square to the top is a room tile
    //  if it is, move up
    presentEnemy = enemies.find(function(enemy){return enemy.position.x==x && enemy.position.y==y-1})
    if (i < y && tileGrid[y-1][x] == 1 && !presentEnemy){
      moveUp(enemy)
    }
  }

  const nextLevelFunc = () => {
    newState.currentLevel ++
    if (newState.currentLevel == 5){
      newState.display = "win"
      return newState
    }
    newState.tileGrid = levelGrids[newState.currentLevel-2]
    return newState
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
        if(  enemy.position.x == j+1 && enemy.position.y == i ||
             enemy.position.x == j-1 && enemy.position.y == i ||
             enemy.position.x == j && enemy.position.y == i-1 ||
             enemy.position.x == j && enemy.position.y == i+1    ){
               player.health--
        } else {
          moveTowardsPlayer(enemy)
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
