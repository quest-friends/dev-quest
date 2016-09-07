function playerMoves (state = {}, action) {
  let newState = {}
  switch(action.type){
    case('PLAYER_MOVE_LEFT'):
      newState = Object.assign({}, state)
      newState.player.coords[0]-=1
      return newState
  }
}
module.exports = { playerMoves }
