const initialState = require('./initialState')
const combineReducers = require('redux').combineReducers
const clone = require('clone')

const helpers = require('./helpers')
const levelList = require('../levels/levelList')
const tileGrids = require('../levels/tileGrids')

function reducer (state = initialState, action) {

  var newState = clone(state)
  var nextTile
  var {
    isPlayerAdjacent,
    moveTowardsPlayer,
    nextLevel,
    removeElementFromArray,
    moveAroundRandomly,
    randomiseObjectPositionToFloorTile
  } = helpers

  switch(action.type){

    case 'PLAYER_MOVE':
        nextTile = newState.tileGrid[action.payload.y][action.payload.x]
        if (nextTile == 1 || nextTile == 2) {
          newState.player.position.x = action.payload.x
          newState.player.position.y = action.payload.y
        } else if (nextTile == 3) {
          nextLevel(newState, levelList, tileGrids)
        }
        newState.player.charge --
        if (newState.player.charge <= 10) {
          newState.loggedMessages = [...newState.loggedMessages, "Battery less than 10%, recharge now!"]
        }
        return newState

    //these are the cases for the player attacking

    case 'PLAYER_ATTACK':
      var {position, messages} = action.payload

      var attackedEnemyIndex = newState.enemies.findIndex(function(enemy){
        return enemy.position.x == position.x && enemy.position.y == position.y
      })
      var attackedEnemy = newState.enemies[attackedEnemyIndex]

      attackedEnemy.health -= newState.player.attack
      newState.loggedMessages = [...newState.loggedMessages, messages.playerAttacks]

      if (attackedEnemy.health <= 0) {
        if(attackedEnemy.type == "promise") {
          randomiseObjectPositionToFloorTile(newState.tileGrid, attackedEnemy)
          attackedEnemy.health++
        }

        else {
          newState.enemies = removeElementFromArray(newState.enemies, attackedEnemyIndex)
          newState.enemyCount--
          newState.player.xp += 5
          if (newState.player.xp >= 10) {
            newState.player.attack++
          }
          newState.loggedMessages = [...newState.loggedMessages, messages.enemyDefeated]
        }
      }
      return newState

      case 'PLAYER_ATTACKED_TO_FALSE':
        newState.player.hasBeenAttacked = false
        return newState

    // these are the cases for player to item interaction

    case 'PICKUP_ITEM':
      var itemX = action.payload.position.x
      var itemY = action.payload.position.y
      var collectedItemIndex = newState.items.findIndex(function(item){
        return item.position.x == itemX && item.position.y == itemY
      })
      var collectedItem = newState.items[collectedItemIndex].type
        newState.items = removeElementFromArray(newState.items, collectedItemIndex)
        if (collectedItem == 'coffee') {
            newState.player.health++
        }
        else if (collectedItem == 'battery') {
          newState.player.charge+= 30
        }
        newState.loggedMessages = [...newState.loggedMessages, action.payload.messageOnPickup]
      return newState

    //these are the cases for enemies attacking

    case 'ALL_ENEMIES_ACT':
      newState.enemies.map(function(enemy){
        if(isPlayerAdjacent(newState.player, enemy)){
          newState.loggedMessages = [...newState.loggedMessages, enemy.messages.enemyAttacks]
          newState.player.health--
          newState.player.hasBeenAttacked = true
            if (newState.player.health <= 5) {
              newState.loggedMessages = [...newState.loggedMessages, "Your well-being is important - go get some coffee"]
            }
        } else if (enemy.type == 'chrome') {
          moveTowardsPlayer(enemy, newState)
        } else if (enemy.type == 'firefox') {
          moveAroundRandomly(enemy, newState)
        }
      })
      return newState

    //these are the cases for game running
    case 'START_GAME':
      newState.display = "game"
      newState.loggedMessages = [...newState.loggedMessages, action.payload.messages.messageOnPlayerChoice]
      newState.player.type = action.payload.type
      newState.player.health = action.payload.health
      newState.player.charge = action.payload.charge
      newState.player.xp = action.payload.xp
      newState.player.attack = action.payload.attack
      newState.player.defence = action.payload.defence
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
