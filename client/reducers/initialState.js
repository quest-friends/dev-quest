var enemies = require('../enemies/enemies')
var items = require('../items/items')
var gotchas = require('../gotchas/gotchas')
var clone = require('clone')

const initialState = {
  tileGrid: [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,2,2,2,2,2,2,2,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,0,0,0,0,0,0,2,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,0,0,0,0,0,0,2,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,0,0,0,0,0,0,2,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,0,0,0,0,0,0,0,2,0,0,0,0,0],
    [0,1,1,1,1,1,1,0,0,0,0,0,0,0,2,0,0,0,0,0],
    [0,1,1,1,1,1,1,2,2,2,2,2,2,2,2,0,0,0,0,0],
    [0,1,1,3,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  ],
  player: {
    type: null,
    position: {
      x: 4,
      y: 4
    },
    health: 0,
    charge: 0,
    xp: 0,
    attack: 0,
    defence: 0,
    image: "",
    hasBeenAttacked: false
  },
  enemyCount: 4,
  enemies: [
    Object.assign({}, enemies.Firefox, {position: { x: 15, y: 10}}),
    Object.assign({}, enemies.ie6, {position: { x: 2, y: 14}})
  ],
  items: [
    Object.assign({}, items.Coffee, {position: { x: 7, y: 3}}),
    Object.assign({}, items.Battery, {position: { x: 16, y: 8}}),
    Object.assign({}, items.ApiKey, {position: { x: 4, y: 14}})
  ],
  loggedMessages: [ "Hello World!" ],
  display: "start",
  currentLevel: 0,
  isExitOpen: false,
  tutorialLevel: true,
  gotchas: [
    Object.assign({}, gotchas.RabbitHole, {position: {x:5, y:15}})
  ]
}

module.exports = initialState
