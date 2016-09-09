import initialState from './initialState'
import { combineReducers } from 'Redux'

function reducer (state = initialState, action) {
  let newState = {}
  let i = state.player.position.y
  let j = state.player.position.x
  const tileGrid = state.tileGrid

  switch(action.type){

    //these are the cases for player movement
    case('PLAYER_MOVE_LEFT'):
      if (tileGrid[i-1][j] != 0) {
        console.log("this is tile to left: ", tileGrid[i-1][j]);
        newState = Object.assign({}, state)
        newState.player.position.x -= 1
        return newState
      }
    case('PLAYER_MOVE_RIGHT'):
      newState = Object.assign({}, state)
      newState.player.position.x += 1
      return newState
    case('PLAYER_MOVE_UP'):
      newState = Object.assign({}, state)
      newState.player.position.y -= 1
      return newState
    case('PLAYER_MOVE_DOWN'):
      newState = Object.assign({}, state)
      newState.player.position.y += 1
      return newState

    //these are the cases for game running
    case 'START_GAME':
      newState = Object.assign({}, state)
      newState.isGameRunning = true
      return newState


    default:
      return state
  }
}

export default reducer
