
const playerAttackLeft = (enemy) => {
  return {
    type: "PLAYER_ATTACK_LEFT",
    payload: enemy
  }
}


const playerAttackRight = (enemy) => {
  return {
    type: "PLAYER_ATTACK_RIGHT",
    payload: enemy
  }
}
const playerAttackUp = (enemy) => {
  return {
    type: "PLAYER_ATTACK_UP",
    payload: enemy
  }
}
const playerAttackDown = (enemy) => {
  return {
    type: "PLAYER_ATTACK_DOWN",
    payload: enemy
  }
}

export {
  playerAttackLeft,
  playerAttackRight,
  playerAttackUp,
  playerAttackDown
}
