var enemies = require('../enemies/enemies')
var items = require('../items/items')

const createObject = (type) => {
  return Object.assign({}, type)
}

const levelList = [
  {
    player: {
      position:{ x: 2, y: 2 }
    },
    enemies: [
      createObject(enemies.Chrome),
      createObject(enemies.Firefox)
    ],
    items: [
      createObject(items.Coffee),
      createObject(items.Coffee)
      ],
    enemyCount: 1,
  },

  {
    player: {
      position:{ x: 1, y: 15 }
    },
    enemies: [
      createObject(enemies.Chrome, 4, 3),
      createObject(enemies.Firefox, 11, 11)
    ],
    enemyCount: 1
  },
  {
    player: {
      position:{ x: 1, y: 15 }
    },
    enemies: [
      createObject(enemies.Chrome, 4, 3),
      createObject(enemies.Firefox, 11, 11)
    ],
    enemyCount: 1
  }
]

module.exports = levelList
