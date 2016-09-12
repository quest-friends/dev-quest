var enemiesType = require('../enemies/enemies')

const createEnemy = (type) => {
  return Object.assign({}, type)
}

const levelList = [
  {
    player: {
      position:{ x: 2, y: 2 }
    },
    enemies: [
      createEnemy(enemiesType.Chrome),
      createEnemy(enemiesType.Firefox)

    ],
    items: [
        { position: { x: 10, y: 10},
          type: "coffee"
        },
        { position: { x: 20, y: 20},
          type: "coffee"
        }
      ],
    enemyCount: 1,
  },

  {
    player: {
      position:{ x: 1, y: 15 }
    },
    enemies: [
      createEnemy(enemiesType.Chrome, 4, 3),
      createEnemy(enemiesType.Firefox, 11, 11)
    ],
    enemyCount: 1
  },
  {
    player: {
      position:{ x: 1, y: 15 }
    },
    enemies: [
      createEnemy(enemiesType.Chrome, 4, 3),
      createEnemy(enemiesType.Firefox, 11, 11)
    ],
    enemyCount: 1
  }
]

module.exports = levelList
