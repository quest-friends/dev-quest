const test = require('tape')
const reducer = require('../client/reducers/reducer')

test('PlayerMovesLeft', function (t) {
  var testState = {player:{position: {x:10}  } }
  var expectedState = {player:{position: {x:9}  } }
  var actualState = reducer(testState, {type: "PLAYER_MOVE_LEFT"})
  t.deepEqual(actualState, expectedState, "Player moving left changes the state")
  t.end()
})

test('PlayerMovesRight', function (t) {
  var testState = {player:{position: {x:10}  } }
  var expectedState = {player:{position: {x:11}  } }
  var actualState = reducer(testState, {type: "PLAYER_MOVE_RIGHT"})
  t.deepEqual(actualState, expectedState, "Player moving right changes the state")
  t.end()
})

test('PlayerMovesUp', function (t) {
  var testState = {player:{position: {y:10}  } }
  var expectedState = {player:{position: {y:9}  } }
  var actualState = reducer(testState, {type: "PLAYER_MOVE_UP"})
  t.deepEqual(actualState, expectedState, "Player moving up changes the state")
  t.end()
})

test('PlayerMovesDown', function (t) {
  var testState = {player:{position: {y:10}  } }
  var expectedState = {player:{position: {y:11}  } }
  var actualState = reducer(testState, {type: "PLAYER_MOVE_DOWN"})
  t.deepEqual(actualState, expectedState, "Player moving down changes the state")
  t.end()
})


test('Starting Game', function (t) {
  var testState = {display: "start" }
  var expectedState = {display: "game"}
  var actualState = reducer(testState, {type: "START_GAME"})
  t.deepEqual(actualState, expectedState, "Sending a start game action triggers the game to start")
  t.end()
})

test('Restarting game from a win', function (t) {
  var testState = {display: "win" }
  var expectedState = {display: "game"}
  var actualState = reducer(testState, {type: "START_GAME"})
  t.deepEqual(actualState, expectedState, "Sending a start game action from the win screen triggers the game to restart")
  t.end()
})

test('Restarting game from a loss', function (t) {
  var testState = {display: "loss" }
  var expectedState = {display: "game"}
  var actualState = reducer(testState, {type: "START_GAME"})
  t.deepEqual(actualState, expectedState, "Sending a start game action from the loss screen triggers the game to restart")
  t.end()
})

test('Losing Game', function (t) {
  var testState = {display: "game" }
  var expectedState = {display: "win"}
  var actualState = reducer(testState, {type: "WIN_GAME"})
  t.deepEqual(actualState, expectedState, "Sending a win game action triggers the game to end")
  t.end()
})

test('Winning Game', function (t) {
  var testState = {display: "start" }
  var expectedState = {display: "loss"}
  var actualState = reducer(testState, {type: "LOSE_GAME"})
  t.deepEqual(actualState, expectedState, "Sending a lose game action triggers the game to start")
  t.end()
})
