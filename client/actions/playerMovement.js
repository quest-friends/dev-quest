
const playerMoveLeft = () => {
  return {
    type: "PLAYER_MOVE_LEFT"
  }
}

const playerMoveRight = () => {
  return {
    type: "PLAYER_MOVE_RIGHT"
  }
}
const playerMoveUp = () => {
  return {
    type: "PLAYER_MOVE_UP"
  }
}
const playerMoveDown = () => {
  return {
    type: "PLAYER_MOVE_DOWN"
  }
}

export {
  playerMoveLeft,
  playerMoveRight,
  playerMoveUp,
  playerMoveDown
}
