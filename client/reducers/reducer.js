import initialState from './initialState'
import { combineReducers } from 'Redux'
import position from './player_moves'
import gameRunning from './gameRunning'

function reducer (state = initialState, action) {
  return state
}

export default combineReducers({
  gameRunning,
  position,
  reducer
})
