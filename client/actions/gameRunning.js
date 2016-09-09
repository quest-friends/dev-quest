
function startGame () {
  return {
    type: "START_GAME"
  }
}

function endGame () {
  return {
    type: "END_GAME"
  }
}

export {
  startGame,
  endGame
}
