var enemies = require('../enemies/enemies')
var items = require('../items/items')
var gotchas = require('../gotchas/gotchas')
var clone = require('clone')

const initialState = {
  tileGrid: [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,0,0],
    [0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  ],
  player: {
    type: null,
    position: {
      x: 1,
      y: 6
    },
    health: 0,
    charge: 0,
    xp: 0,
    attack: 0,
    defence: 0,
    hasBeenAttacked: false
  },
  enemyCount: 4,
  enemies: [
    Object.assign({}, enemies.Chrome, {position: { x: 16, y: 6}}),
    Object.assign({}, enemies.Firefox, {position: { x: 6, y: 12}}),
    Object.assign({}, enemies.Ie6, {position: { x: 15, y: 12}}),
    Object.assign({}, enemies.Safari, {position: { x: 3, y: 15}})
  ],
  items: [
    Object.assign({}, items.Coffee, {position: { x: 4, y: 7}}),
    Object.assign({}, items.Battery, {position: { x: 14, y: 4}}),
    Object.assign({}, items.Coffee, {position: { x: 16, y: 13}}),
    Object.assign({}, items.CodeRed, {position: { x: 7, y: 7}})
  ],
  loggedMessages: [ "Hello World!" ],
  display: "start",
  currentLevel: 1,
  gotchas: [
    Object.assign({}, gotchas.Rabbithole, {position: {x:4, y:7}}),
    Object.assign({}, gotchas.Rabbithole, {position: {x:3, y:7}}),
    Object.assign({}, gotchas.Rabbithole, {position: {x:2, y:7}}),
    Object.assign({}, gotchas.Rabbithole, {position: {x:5, y:7}})
  ]
}

module.exports = initialState
