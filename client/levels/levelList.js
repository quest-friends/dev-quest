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
    ]
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
    ]
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
    ]
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
    ]
  }
]

module.exports = levelList
