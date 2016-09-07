const test = require('tape')
const movement = require('../reducers/player_moves')

test('PlayerMovesLeft', function (t) {
  var testState = {player:{position: {x:10}  } }
  var expectedState = {player:{position: {x:9}  } }
  var actualState = movement.playerMoves(testState, {type: "PLAYER_MOVE_LEFT"})
  t.deepEqual(actualState, expectedState, "Player moving left changes the state")
  t.end()
})
