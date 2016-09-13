
const playerAttack = (enemy) => {
  return {
    type: "PLAYER_ATTACK",
    payload: enemy
  }
}

const resolvePlayerDamage = () => {
  return {
    type: "RESOLVE_PLAYER_DAMAGE"
  }
}

export {
  playerAttack,
  resolvePlayerDamage
}
