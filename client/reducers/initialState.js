var enemies = require('../enemies/enemies')
var items = require('../items/items')
var gotchas = require('../gotchas/gotchas')
var clone = require('clone')

const initialState = {
  tileGrid: [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0],
    [0,0,1,1,1,1,1,1,2,2,2,2,2,2,2,1,0,0,0,0],
    [0,0,1,1,1,1,1,1,0,0,0,0,0,1,2,1,0,0,0,0],
    [0,0,1,1,1,1,1,1,0,0,0,0,0,0,2,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0],
    [0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0],
    [0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0],
    [0,0,0,0,2,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0],
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
    image: null,
    hasBeenAttacked: false
  },
  enemies: [
    Object.assign({}, enemies.Firefox, {position: { x: 15, y: 10}}),
    Object.assign({}, enemies.Safari, {position: { x: 3, y: 13}}),
    Object.assign({}, enemies.Ie6, {position: { x: 2, y: 10}})
  ],
  items: [
    Object.assign({}, items.Coffee, {position: { x: 7, y: 3}}),
    Object.assign({}, items.Battery, {position: { x: 15, y: 3}}),
    Object.assign({}, items.ApiKey, {position: { x: 4, y: 10}})
  ],
  loggedMessages: [ "Hello World!", "Arrow Keys To Play" ],
  display: "start",
  currentLevel: 0,
  isExitOpen: false,
  tutorialLevel: true,
  gotchas: [
    Object.assign({}, gotchas.RabbitHole, {position: {x:6, y:15}})
  ]
}

module.exports = initialState
