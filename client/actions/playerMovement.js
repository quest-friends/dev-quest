const playerMove = (y, x) => {
  return {
    type: "PLAYER_MOVE",
    payload: {y, x}
  }
}

const playerWait = () => {
  return {
    type: "PLAYER_WAIT"
  }
}

export {
  playerMove,
  playerWait
}
