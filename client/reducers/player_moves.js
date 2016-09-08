import initialState from './initialState'

function playerMoves (state = initialState.player.position, action) {
  console.log("player move reducer", state);
  let newState = {}
  switch(action.type){
    case('PLAYER_MOVE_LEFT'):
      newState = Object.assign({}, state)
      newState.x -= 1
      return newState
    case('PLAYER_MOVE_RIGHT'):
      newState = Object.assign({}, state)
      newState.x += 1
      return newState
    case('PLAYER_MOVE_UP'):
      newState = Object.assign({}, state)
      newState.y -= 1
      return newState
    case('PLAYER_MOVE_DOWN'):
      newState = Object.assign({}, state)
      newState.y += 1
      return newState
    default:
      return state
  }
}

export default playerMoves
