var initialState = require('./initialState')
var combineReducers = require('redux').combineReducers
var levelGrids = require('../levels/levelGrids')

function reducer (state = initialState, action) {

  var newState = Object.assign({}, state)
  var { tileGrid , player } = newState
  var playerX = player.position.x
  var playerY = player.position.y
  var nextTile

  var nextLevel = () => {
    newState.currentLevel ++
    if (newState.currentLevel == 5){
      newState.display = "win"
      return newState
    }

    newState.tileGrid = levelGrids[newState.currentLevel-2]
    return newState
  }

  var isEnemyInTile = (y, x) => {
    return newState.enemies.find(function(newStateEnemy){
      return newStateEnemy.position.x==x && newStateEnemy.position.y==y
    })
  }

  var isPlayerAdjacent = function(enemy) {
    var {x, y } = enemy.position
    return  (x == playerX+1 && y == playerY || x == playerX-1 && y == playerY || x == playerX && y == playerY-1 || x == playerX && y == playerY+1  )
  }

  var isPlayerOnItem = function(item) {
    var {x, y} = item.position
    return (x == playerX && y == playerY)
  }

  switch(action.type){

  case 'PLAYER_MOVE':
    var { y, x} = action.payload
    nextTile = tileGrid[y][x]
    if (nextTile == 1 || nextTile == 2) {
      newState.player.position.x = x
      newState.player.position.y = y
      newState.player.charge --
    } else if (nextTile == 3) {
      nextLevel()
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
    return newState

    // these are the cases for player to item interaction

  case 'PICKUP_ITEM':
    var {x, y} = action.payload.position

    var collectedItemIndex = newState.items.findIndex(function(item){
      return item.position.x == x && item.position.y == y
    })
    newState.items.splice(collectedItemIndex, 1)
    newState.player.health++
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

function moveTowardsPlayer(enemy) {
  var {x, y} = enemy.position
  var enemyDestination = {x, y}

  switch(true){
  case (playerX < x):
    enemyDestination = {y:y, x:x-1}
    break

  case (playerX > x):
    enemyDestination = {y:y, x:x+1}
    break

  case (playerY < y):
    enemyDestination = {y:y-1, x:x}
    break

  case (playerY > y):
    enemyDestination = {y:y+1, x:x}
    break

  default:
    enemyDestination = {x, y}
  }

  function isValidEnemyMove(tileGrid, enemyDestination) {
    return (tileGrid[enemyDestination.y][enemyDestination.x] == 1 && !isEnemyInTile(enemyDestination.y, enemyDestination.x) )
  }

  if(isValidEnemyMove(...)) moveEnemy(enemy, enemyDestination.y, enemyDestination.x)

}

function moveEnemy(enemy, y, x){
  enemy.position = {y:y, x:x}
}
module.exports = reducer
