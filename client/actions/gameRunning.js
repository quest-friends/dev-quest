
function startGame (player) {
  return {
    type: "START_GAME",
    payload: player
  }
}

function winGame () {
  return {
    type: "WIN_GAME"
  }
}

function loseGame () {
  return {
    type: "LOSE_GAME"
  }
}

export {
  startGame,
  winGame,
  loseGame
}
