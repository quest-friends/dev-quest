var initialState = require('./initialState')
var combineReducers = require('redux').combineReducers
var levelGrids = require('../levels/levelGrids')

function reducer (state = initialState, action) {

  var newState = Object.assign({}, state)
  var { tileGrid , player } = newState
  var playerX = player.position.x
  var playerY = player.position.y
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
    //psuedocode:
    // the case where the player is adjacent to the enemy should already have been handled. So:
    // first implementation,
    // if the enemy's x is greater than the players
    //  check if the square to the left is a room tile
    //  if  it is, move left
    if (playerX < x  && tileGrid[y][x-1] == 1 && !newState.enemies.find(function(newStateEnemy){return newStateEnemy.position.x==x-1 && newStateEnemy.position.y==y})){
      moveLeft(enemy)
    }
    // else
    // if the enemy's x is less than the players
    //  check if the square to the right is a room tile
    //  if it is, move right
    else if (playerX > x  && tileGrid[y][x+1] == 1 && !newState.enemies.find(function(newStateEnemy){return newStateEnemy.position.x==x+1 && newStateEnemy.position.y==y})){
      moveRight(enemy)
    }
    // else
    // if the enemy's y is less than the players
    //  check if the square to the bottom is a room tile
    //  if it is, move down
    else if (playerY > y && tileGrid[y+1][x] == 1 && !newState.enemies.find(function(newStateEnemy){return newStateEnemy.position.x==x && newStateEnemy.position.y==y+1})){
      moveDown(enemy)
    }
    // else
    // if the enemy's y is greater than the players
    //  check if the square to the top is a room tile
    //  if it is, move up
    else if (playerY < y && tileGrid[y-1][x] == 1 && !newState.enemies.find(function(newStateEnemy){return newStateEnemy.position.x==x && newStateEnemy.position.y==y-1})){
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

  var isPlayerAdjacent = function(enemy) {
    var {x, y } = enemy.position
    return  (x == playerX+1 && y == playerY || x == playerX-1 && y == playerY || x == playerX && y == playerY-1 || x == playerX && y == playerY+1  )
  }

  switch(action.type){

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
      var enemyX = action.payload.position.x
      var enemyY = action.payload.position.y

      var attackedEnemyIndex = newState.enemies.findIndex(function(newStateEnemy){
        return newStateEnemy.position.x == enemyX && newStateEnemy.position.y == enemyY
      })
      var attackedEnemy = newState.enemies[attackedEnemyIndex]

      attackedEnemy.health --
      newState.loggedMessages.push(action.payload.messages.playerAttacks)
      newState.loggedMessages = newState.loggedMessages.slice(0)
      if (attackedEnemy.health <= 0) {
        newState.enemies.splice(attackedEnemyIndex, 1)
        newState.enemyCount--
        newState.loggedMessages.push(action.payload.messages.enemyDefeated)
        newState.loggedMessages = newState.loggedMessages.slice(0)
      }
      console.log('attacking', action.payload)
      return newState

    //these are the cases for enemies attacking

    case 'ALL_ENEMIES_ACT':
      newState.enemies.map(function(enemy){
        if(isPlayerAdjacent(enemy)){
               player.health--
        } else if (enemy.type == 'chrome') {
          moveTowardsPlayer(enemy)
        }
      })
      newState.enemies = newState.enemies.slice(0)
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
