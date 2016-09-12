import {Chrome, Firefox, Opera, Ie6} from "../enemies/enemies"

const createEnemy = (type, x, y) => {
  return Object.assign({}, type, {position: {x, y}})
}

const levelList = [
  {
    player: {
      position:{ x: 2, y: 2 }
    },
    enemies: [
      createEnemy(Chrome, 4, 3),
      createEnemy(Firefox, 11, 11)

    ],
  enemyCount: 1,
  },

  {
    player: {
      position:{ x: 1, y: 15 }
    },
    enemies: [
      createEnemy(Chrome, 4, 3),
      createEnemy(Firefox, 11, 11)
    ],
    enemyCount: 1
  },
  {
    player: {
      position:{ x: 1, y: 15 }
    },
    enemies: [
      createEnemy(Chrome, 4, 3),
      createEnemy(Firefox, 11, 11)
    ],
    enemyCount: 1
  }
]

module.exports = levelList
