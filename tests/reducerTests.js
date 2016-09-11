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

test('Starting Game', function (t) {
  var testState = {
     tileGrid:[
       [],
       [],
       []
     ],
     player:{
       position: {
         x: 1,
         y: 1
       }
     },
     display: "start"
   }

  var expectedState = {
     tileGrid:[
       [],
       [],
       []
     ],
     player:{
       position: {
         x: 1,
         y: 1
       }
     },
     display: "game"
   }
  var actualState = reducer(testState, {type: "START_GAME"})
  t.deepEqual(actualState, expectedState, "Sending a start game action triggers the game to start")
  t.end()
})

//
test('Winning Game', function (t) {
  var testState = {
     tileGrid:[
       [],
       [],
       []
     ],
     player:{
       position: {
         x: 1,
         y: 1
       }
     },
     display: "game"
   }

  var expectedState = {
     tileGrid:[
       [],
       [],
       []
     ],
     player:{
       position: {
         x: 1,
         y: 1
       }
     },
     display: "win"
   }
  var actualState = reducer(testState, {type: "WIN_GAME"})
  t.deepEqual(actualState, expectedState, "Sending a win game action triggers the game to end with WIN")
  t.end()
})
//
test('Losing Game', function (t) {
  var testState = {
     tileGrid:[
       [],
       [],
       []
     ],
     player:{
       position: {
         x: 1,
         y: 1
       }
     },
     display: "game"
   }

  var expectedState = {
     tileGrid:[
       [],
       [],
       []
     ],
     player:{
       position: {
         x: 1,
         y: 1
       }
     },
     display: "loss"
   }
  var actualState = reducer(testState, {type: "LOSE_GAME"})
  t.deepEqual(actualState, expectedState, "Sending a lose game action triggers the game to end with LOSS")
  t.end()
})

//
 test('Player Attack', function (t) {
  var testState = {
    tileGrid: [
      [1,1,1],
      [1,1,1],
      [1,1,1]
    ],
      player: {
        position: {
          x: 2,
          y: 1
        }
      },
      enemies: [
        { position: { x: 1, y: 1 },
          health: 2,
          type: "opera"
        }
      ],
      display: "game",
      currentLevel: 1
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
         },
       },
       enemies: [
         { position: { x: 1, y: 1 },
           health: 1,
           type: "opera"
         }
       ],
       display: "game",
       currentLevel: 1
     }
  var actualState = reducer(testState, {type: "PLAYER_ATTACK", payload: testState.enemies[0]})
  t.deepEqual(actualState, expectedState, "Sending a player attack action triggers the enemy to lose 1 health")
  t.end()
})

//
test('Player Attack', function (t) {
 var testState = {
   tileGrid: [
     [1,1,1],
     [1,1,1],
     [1,1,1]
   ],
     player: {
       position: {
         x: 2,
         y: 1
       }
     },
     enemies: [
       { position: { x: 1, y: 1 },
         health: 1,
         type: "opera"
       }
     ],
     display: "game",
     currentLevel: 1
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
        },
      },
      enemies: [
      ],
      display: "game",
      currentLevel: 1
    }
 var actualState = reducer(testState, {type: "PLAYER_ATTACK"})
 t.deepEqual(actualState, expectedState, "When enemies Health reaches 0 it is removed from enemy array")
 t.end()
})

//
test('Enemies Act', function (t) {
 var testState = {
   tileGrid: [
     [1,1,1],
     [1,1,1],
     [1,1,1]
   ],
     player: {
       position: {
         x: 2,
         y: 1
       },
       health: 3
     },
     enemies: [
       { position: { x: 1, y: 1 },
         health: 1,
         type: "opera"
       }
     ],
     display: "game",
     currentLevel: 1
   }
   console.log("testState", testState);
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
        },
        health: 2
      },
      enemies: [
        { position: { x: 1, y: 1 },
          health: 1,
          type: "opera"
        }
      ],
      display: "game",
      currentLevel: 1
    }
    console.log("ExpectedState",testState);
 var actualState = reducer(testState, {type: "ALL_ENEMIES_ACT"})
 t.deepEqual(actualState, expectedState, "enemies Act")
 t.end()
})
