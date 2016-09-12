import {Chrome, Firefox, Opera, Ie6} from "../enemies/enemies"

const createEnemy = (type) => {
  return Object.assign({}, type)
}

const levelList = [
  {
    player: {
      position:{ x: 2, y: 2 }
    },
    enemies: [
      createEnemy(Chrome),
      createEnemy(Firefox)

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
