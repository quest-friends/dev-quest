
function startGame () {
  return {
    type: "START_GAME"
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
  winGame
}
