const test = require('tape')
const movement = require('../client/reducers/player_moves')

test('PlayerMovesLeft', function (t) {
  var testState = {player:{position: {x:10}  } }
  var expectedState = {player:{position: {x:9}  } }
  var actualState = movement.playerMoves(testState, {type: "PLAYER_MOVE_LEFT"})
  t.deepEqual(actualState, expectedState, "Player moving left changes the state")
  t.end()
})

test('PlayerMovesRight', function (t) {
  var testState = {player:{position: {x:10}  } }
  var expectedState = {player:{position: {x:11}  } }
  var actualState = movement.playerMoves(testState, {type: "PLAYER_MOVE_RIGHT"})
  t.deepEqual(actualState, expectedState, "Player moving right changes the state")
  t.end()
})

test('PlayerMovesUp', function (t) {
  var testState = {player:{position: {y:10}  } }
  var expectedState = {player:{position: {y:9}  } }
  var actualState = movement.playerMoves(testState, {type: "PLAYER_MOVE_UP"})
  t.deepEqual(actualState, expectedState, "Player moving up changes the state")
  t.end()
})

test('PlayerMovesDown', function (t) {
  var testState = {player:{position: {y:10}  } }
  var expectedState = {player:{position: {y:11}  } }
  var actualState = movement.playerMoves(testState, {type: "PLAYER_MOVE_DOWN"})
  t.deepEqual(actualState, expectedState, "Player moving down changes the state")
  t.end()
})
