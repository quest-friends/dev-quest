var initialState = require('./initialState')
var combineReducers = require('redux').combineReducers

function reducer (state = initialState, action) {

  var newState = {}
  var tileGrid = state.tileGrid
  var i = state.player.position.y
  var j = state.player.position.x

  switch(action.type){

    //these are the cases for player movement
    case 'PLAYER_MOVE_LEFT':
      newState = Object.assign({}, state)
      if (tileGrid[i][j-1] != 0) {
        newState.player.position.x -= 1
      }
      if (tileGrid[i][j-1] == 3) {
        newState.display = "win"
      }
      return newState

    case 'PLAYER_MOVE_RIGHT':
      newState = Object.assign({}, state)
      if (tileGrid[i][j+1] != 0) {
        newState.player.position.x += 1
      }
      if (tileGrid[i][j+1] == 3) {
        newState.display = "win"
      }
      return newState

    case 'PLAYER_MOVE_UP':
      newState = Object.assign({}, state)
      if (tileGrid[i-1][j] != 0) {
        newState.player.position.y -= 1
      }
      if (tileGrid[i-1][j] == 3) {
        newState.display = "win"
      }
      return newState

    case 'PLAYER_MOVE_DOWN':
      newState = Object.assign({}, state)
      if (tileGrid[i+1][j] != 0) {
        newState.player.position.y += 1
      }
      if (tileGrid[i+1][j] == 3) {
        newState.display = "win"
      }
      return newState

    //these are the cases for game running
    case 'START_GAME':
      newState = Object.assign({}, state)
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
