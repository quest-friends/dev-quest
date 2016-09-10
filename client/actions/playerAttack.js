
const playerAttack = (enemy) => {
  return {
    type: "PLAYER_ATTACK",
    payload: enemy
  }
}

export {
  playerAttack
}
