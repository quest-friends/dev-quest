
const playerAttack = (enemy) => {
  return {
    type: "PLAYER_ATTACK",
    payload: enemy
  }
}
const setPlayerAttackedToFalse = () => {
  return {
    type: "PLAYER_ATTACKED_TO_FALSE"
  }
}


export {
  playerAttack,
  setPlayerAttackedToFalse
}
