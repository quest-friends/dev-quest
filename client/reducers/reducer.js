var initialState = require('./initialState')
var combineReducers = require('redux').combineReducers

function reducer (state = initialState, action) {


  var { tileGrid, enemies } = state
  var newState = Object.assign({}, state)
  var i = state.player.position.y
  var j = state.player.position.x

  switch(action.type){

    //these are the cases for player movement
    case 'PLAYER_MOVE_LEFT':
      var presentEnemy = enemies.find(function(enemy) {
        return (enemy.position.x == (j-1) && enemy.position.y == i)
      })

      if(presentEnemy) {
        console.log('attacky stuff goes here');
      } else if (tileGrid[i][j-1] != 0) {
        newState.player.position.x -= 1
      } else if (tileGrid[i][j-1] == 3) {
        newState.display = "win"
      }
      return newState

    case 'PLAYER_MOVE_RIGHT':
      var presentEnemy = enemies.find(function(enemy) {
        return (enemy.position.x == (j+1) && enemy.position.y == (i))
      })

      if(presentEnemy) {
        console.log('attacky stuff goes here');
      } else if (tileGrid[i][j+1] != 0) {
        newState.player.position.x += 1
      } else if (tileGrid[i][j+1] == 3) {
        newState.display = "win"
      }
      return newState

    case 'PLAYER_MOVE_UP':
      var presentEnemy = enemies.find(function(enemy) {
        return (enemy.position.x == (j) && enemy.position.y == (i-1))
      })
      if(presentEnemy) {
        console.log('attacky stuff goes here');
      } else if (tileGrid[i-1][j] != 0) {
        newState.player.position.y -= 1
      } else if (tileGrid[i-1][j] == 3) {
        newState.display = "win"
      }
      return newState

    case 'PLAYER_MOVE_DOWN':
      var presentEnemy = enemies.find(function(enemy) {
        return (enemy.position.x == (j) && enemy.position.y == (i+1))
      })
      if(presentEnemy) {
        console.log('attacky stuff goes here');
      } else if (tileGrid[i+1][j] != 0) {
        newState.player.position.y += 1
      } else if (tileGrid[i+1][j] == 3) {
        newState.display = "win"
      }
      return newState

    //these are the cases for game running
    case 'START_GAME':
      newState.display = "game"
      return newState
    case 'WIN_GAME':
      newState = Object.assign({}, state)
      newState.display = "win"
      return newState
    case 'LOSE_GAME':
      newState = Object.assign({}, state)
      newState.display = "loss"
      return newState


    default:
      return state
  }
}

module.exports = reducer
