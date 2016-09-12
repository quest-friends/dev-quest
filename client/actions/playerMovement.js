const playerMove = (y, x) => {
  return {
    type: "PLAYER_MOVE",
    payload: {y, x}
  }
}

export {
  playerMove
}
