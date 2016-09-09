import React from 'react'
import {connect} from 'react-redux'
import Game from '../components/game'
import {playerMoveLeft, playerMoveRight, playerMoveDown, playerMoveUp} from '../actions/playerMovement'
import {winGame, loseGame} from '../actions/gameRunning'

const mapStateToProps = (state) => {
  return {
    tileGrid: state.tileGrid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playerMoveLeft: () => {dispatch(playerMoveLeft()) },
    playerMoveRight: () => {dispatch(playerMoveRight()) },
    playerMoveUp: () => {dispatch(playerMoveUp()) },
    playerMoveDown: () => {dispatch(playerMoveDown()) },
    winGame: () => {dispatch(winGame())},
    loseGame: () => {dispatch(loseGame())}
  }
}

const GameConnector = connect(mapStateToProps, mapDispatchToProps)(Game)

export default GameConnector
