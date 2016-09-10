var initialState = require('./initialState')
var combineReducers = require('redux').combineReducers

function reducer (state = initialState, action) {

  var newState = Object.assign({}, state)
  var { tileGrid, enemies } = newState
  var i = state.player.position.y
  var j = state.player.position.x
  var nextTile

  switch(action.type){

    //these are the cases for player movement
    case 'PLAYER_MOVE_LEFT':
      nextTile = tileGrid[i][j-1]
      if (nextTile == 1 || nextTile == 2) {
        newState.player.position.x -= 1
      } else if (nextTile == 3) {
        newState.display = "win"
      }
      return newState

    case 'PLAYER_MOVE_RIGHT':
      nextTile = tileGrid[i][j+1]
      if (nextTile == 1 || nextTile == 2) {
        newState.player.position.x += 1
      } else if (nextTile == 3) {
        newState.display = "win"
      }
      return newState

    case 'PLAYER_MOVE_UP':
      nextTile = tileGrid[i-1][j]
      if (nextTile == 1 || nextTile == 2) {
        newState.player.position.y -= 1
      } else if (nextTile == 3) {
        newState.display = "win"
      }
      return newState

    case 'PLAYER_MOVE_DOWN':
      nextTile = tileGrid[i+1][j]
      if (nextTile == 1 || nextTile == 2) {
        newState.player.position.y += 1
      } else if (nextTile == 3) {
        newState.display = "win"
      }
      return newState

    //these are the cases for the player attacking

    case 'PLAYER_ATTACK_LEFT':
      console.log('attacking', action.payload)
      return newState

    case 'PLAYER_ATTACK_RIGHT':
      console.log('attacking', action.payload)
      return newState

    case 'PLAYER_ATTACK_UP':
      console.log('attacking', action.payload)
      return newState

    case 'PLAYER_ATTACK_DOWN':
      console.log('attacking', action.payload)
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
