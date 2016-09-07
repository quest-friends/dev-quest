const test = require('tape')
const movement = require('../reducers/player_moves')

test('PlayerMovesLeft', function (t) {
  var testState = {player:{coords: [10,10]  } }
  var expectedState = {player:{coords: [9,10]  } }
  var actualState = movement.playerMoves(testState, {type: "PLAYER_MOVE_LEFT"})
  t.deepEqual(actualState, expectedState, "Player moving left changes the state")
  t.end()
})
