var enemies = require('../enemies/enemies')
var items = require('../items/items')
var clone = require('clone')


const levelList = [
  {
    player: {
      position:{ x: 2, y: 2 }
    },
    enemies: [
      clone(enemies.Chrome),
      clone(enemies.Firefox),
      clone(enemies.Promise)
    ],
    items: [
      clone(items.Coffee),
      clone(items.Battery)
      ],
    enemyCount: 1,
  },

  {
    player: {
      position:{ x: 1, y: 15 }
    },
    enemies: [
      clone(enemies.Chrome),
      clone(enemies.Firefox),
      clone(enemies.Promise)
    ],
    items: [
      clone(items.Coffee),
      clone(items.Battery)
      ],
    enemyCount: 1
  },
  {
    player: {
      position:{ x: 1, y: 15 }
    },
    enemies: [
      clone(enemies.Chrome),
      clone(enemies.Firefox)
    ],
    items: [
      clone(items.Coffee),
      clone(items.Battery)
      ],
    enemyCount: 1
  }
]

module.exports = levelList
