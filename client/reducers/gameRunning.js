import initialState from './initialState'

function gameRunning (state = initialState.isGameRunning, action) {
  let newState = false
  switch(action.type) {
    case 'START_GAME':
      newState = state
      newState = true
      return newState
    default:
      return state
  }
}

export default gameRunning
