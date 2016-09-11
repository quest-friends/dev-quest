
const allEnemiesAct = () => {
  return {
    type: "ALL_ENEMIES_ACT"
  }
}
const enemyMoveLeft = (enemy) => {
  return {
    type: "ENEMY_MOVE_LEFT",
    payload: enemy
  }
}
const enemyMoveRight = (enemy) => {
  return {
    type: "ENEMY_MOVE_RIGHT",
    payload: enemy
  }
}
const enemyMoveUp = (enemy) => {
  return {
    type: "ENEMY_MOVE_UP",
    payload: enemy
  }
}
const enemyMoveDown = (enemy) => {
  return {
    type: "ENEMY_MOVE_DOWN",
    payload: enemy
  }
}

export {
  allEnemiesAct,
  enemyMoveLeft,
  enemyMoveRight,
  enemyMoveUp,
  enemyMoveDown
}
