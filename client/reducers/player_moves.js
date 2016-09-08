import initialState from './initialState'

function playerMoves (state = initialState, action) {
  let newState = {}
  switch(action.type){
    case('PLAYER_MOVE_LEFT'):
      newState = Object.assign({}, state)
      newState.player.position.x -= 1
      return newState
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
    default:
      return state
  }
}

module.exports = playerMoves
