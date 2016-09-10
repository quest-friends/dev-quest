
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

function nextLevel () {
  return {
    type: "NEXT_LEVEL"
  }
}

export {
  startGame,
  winGame,
  loseGame,
  nextLevel
}
