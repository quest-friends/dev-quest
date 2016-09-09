import initialState from './initialState'
import { combineReducers } from 'Redux'
import position from './player_moves'
import isGameRunning from './gameRunning'

function reducer (state = initialState, action) {
  return state
}

export default combineReducers({
  isGameRunning,
  position,
  reducer
})
