var enemies = require('../enemies/enemies')
var items = require('../items/items')
var gotchas = require('../gotchas/gotchas')
var clone = require('clone')


const levelList = [
  {
    player: {
      position:{ x: 2, y: 2 }
    },
    enemies: [
      clone(enemies.Chrome),
      clone(enemies.Firefox),
      clone(enemies.Safari),
      clone(enemies.Ie6)
    ],
    items: [
      clone(items.Coffee),
      clone(items.Battery),
      clone(items.ApiKey),
      clone(items.Battery)
      ],
    gotchas: [
      clone(gotchas.RabbitHole),
      clone(gotchas.InfiniteLoop),
      clone(gotchas.PushedToMaster)
    ],
    enemyCount: 4,
    messageOnStart: "Getting to grips with browsers and developer tools"
  },

  {
    player: {
      position:{ x: 1, y: 15 }
    },
    enemies: [
      clone(enemies.Const),
      clone(enemies.Let),
      clone(enemies.Var)
    ],
    items: [
      clone(items.Coffee),
      clone(items.Coffee),
      clone(items.Battery),
      clone(items.Battery),
      clone(items.Battery),
      clone(items.ApiKey)
    ],
    gotchas: [
      clone(gotchas.RabbitHole),
      clone(gotchas.RabbitHole)
    ],
    enemyCount: 3,
    messageOnStart: "Starting to code: learning about variables"
  },

  {
    player: {
      position:{ x: 1, y: 15 }
    },
    enemies: [
      clone(enemies.Emeny),
      clone(enemies.Bracket),
      clone(enemies.Comma)
    ],
    items: [
      clone(items.Coffee),
      clone(items.Battery)
      ],
    gotchas: [
      clone(gotchas.RabbitHole),
      clone(gotchas.RabbitHole)
    ],
    enemyCount: 3,
    messageOnStart: "Debugger monster level: clear all the syntax errors"
  },

  { player: {
      position:{ x: 1, y: 15 }
    },
    enemies: [
      clone(enemies.Async),
      clone(enemies.Promise)
    ],
    items: [
      clone(items.Coffee),
      clone(items.Battery),
      clone(items.ApiKey)
      ],
    gotchas: [
      clone(gotchas.RabbitHole),
      clone(gotchas.RabbitHole)
    ],
    enemyCount: 2,
    messageOnStart: "Welcome to the fiery pits of Callback Hell"
  }
]

module.exports = levelList
