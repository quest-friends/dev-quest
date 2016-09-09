const test = require('tape')
const reducer = require('../client/reducers/reducer')


test('PlayerMovesLeft', function (t) {
  var testState = {
    tileGrid:[
      [1,1,1],
      [1,1,1],
      [1,1,1]
    ],
    player:{
      position: {
        x: 1,
        y: 1
      }
    }
  }

  var expectedState = {
    tileGrid:[
      [1,1,1],
      [1,1,1],
      [1,1,1]
    ],
    player:{
      position: {
        x: 0,
        y: 1
      }
    }
  }

  var actualState = reducer(testState, {type: "PLAYER_MOVE_LEFT"})
  t.deepEqual(actualState, expectedState, "Player can move left onto a floor tile")
  testState = {
    tileGrid:[
      [0,1,1],
      [0,1,1],
      [0,1,1]
    ],
    player:{
      position: {
        x: 1,
        y: 1
      }
    }
  }

   expectedState = {
    tileGrid:[
      [0,1,1],
      [0,1,1],
      [0,1,1]
    ],
    player:{
      position: {
        x: 1,
        y: 1
      }
    }
  }
  actualState = reducer(testState, {type: "PLAYER_MOVE_LEFT"})
  t.deepEqual(actualState, expectedState, "Player cannot move left into a wall")
  t.end()
})

test('PlayerMovesRight', function (t) {
  var testState = {
    tileGrid:[
      [1,1,1],
      [1,1,1],
      [1,1,1]
    ],
    player:{
      position: {
        x: 1,
        y: 1
      }
    }
  }

  var expectedState = {
    tileGrid:[
      [1,1,1],
      [1,1,1],
      [1,1,1]
    ],
    player:{
      position: {
        x: 2,
        y: 1
      }
    }
  }

  var actualState = reducer(testState, {type: "PLAYER_MOVE_RIGHT"})
  t.deepEqual(actualState, expectedState, "Player can move right onto a floor tile")
  testState = {
    tileGrid:[
      [1,1,0],
      [1,1,0],
      [1,1,0]
    ],
    player:{
      position: {
        x: 1,
        y: 1
      }
    }
  }

   expectedState = {
    tileGrid:[
      [1,1,0],
      [1,1,0],
      [1,1,0]
    ],
    player:{
      position: {
        x: 1,
        y: 1
      }
    }
  }
  actualState = reducer(testState, {type: "PLAYER_MOVE_RIGHT"})
  t.deepEqual(actualState, expectedState, "Player cannot move right into a wall")
  t.end()
})

test('PlayerMovesUp', function (t) {
  var testState = {
    tileGrid:[
      [1,1,1],
      [1,1,1],
      [1,1,1]
    ],
    player:{
      position: {
        x: 1,
        y: 1
      }
    }
  }

  var expectedState = {
    tileGrid:[
      [1,1,1],
      [1,1,1],
      [1,1,1]
    ],
    player:{
      position: {
        x: 1,
        y: 0
      }
    }
  }

  var actualState = reducer(testState, {type: "PLAYER_MOVE_UP"})
  t.deepEqual(actualState, expectedState, "Player can move up onto a floor tile")
  testState = {
    tileGrid:[
      [0,0,0],
      [1,1,1],
      [1,1,1]
    ],
    player:{
      position: {
        x: 1,
        y: 1
      }
    }
  }

   expectedState = {
    tileGrid:[
      [0,0,0],
      [1,1,1],
      [1,1,1]
    ],
    player:{
      position: {
        x: 1,
        y: 1
      }
    }
  }
  actualState = reducer(testState, {type: "PLAYER_MOVE_UP"})
  t.deepEqual(actualState, expectedState, "Player cannot move up into a wall")
  t.end()
})


test('PlayerMovesDown', function (t) {
  var testState = {
    tileGrid:[
      [1,1,1],
      [1,1,1],
      [1,1,1]
    ],
    player:{
      position: {
        x: 1,
        y: 1
      }
    }
  }

  var expectedState = {
    tileGrid:[
      [1,1,1],
      [1,1,1],
      [1,1,1]
    ],
    player:{
      position: {
        x: 1,
        y: 2
      }
    }
  }

  var actualState = reducer(testState, {type: "PLAYER_MOVE_DOWN"})
  t.deepEqual(actualState, expectedState, "Player can move down onto a floor tile")
  testState = {
    tileGrid:[
      [1,1,1],
      [1,1,1],
      [0,0,0]
    ],
    player:{
      position: {
        x: 1,
        y: 1
      }
    }
  }

   expectedState = {
    tileGrid:[
      [1,1,1],
      [1,1,1],
      [0,0,0]
    ],
    player:{
      position: {
        x: 1,
        y: 1
      }
    }
  }
  actualState = reducer(testState, {type: "PLAYER_MOVE_DOWN"})
  t.deepEqual(actualState, expectedState, "Player cannot move down into a wall")
  t.end()
})

// test('Starting Game', function (t) {
//   var testState = {display: "start" }
//   var expectedState = {display: "game"}
//   var actualState = reducer(testState, {type: "START_GAME"})
//   t.deepEqual(actualState, expectedState, "Sending a start game action triggers the game to start")
//   t.end()
// })
//
//
// test('Winning Game', function (t) {
//   var testState = {display: "game" }
//   var expectedState = {display: "win"}
//   var actualState = reducer(testState, {type: "WIN_GAME"})
//   t.deepEqual(actualState, expectedState, "Sending a win game action triggers the game to end")
//   t.end()
// })
//
// test('Losing Game', function (t) {
//   var testState = {display: "game" }
//   var expectedState = {display: "loss"}
//   var actualState = reducer(testState, {type: "LOSE_GAME"})
//   t.deepEqual(actualState, expectedState, "Sending a lose game action triggers the game to start")
//   t.end()
// })
