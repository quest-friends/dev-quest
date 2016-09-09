import React from 'react'
import {connect} from 'react-redux'
import Game from '../components/game'
import {playerMoveLeft, playerMoveRight, playerMoveDown, playerMoveUp} from '../actions/playerMovement'
import {playerAttackLeft, playerAttackRight, playerAttackDown, playerAttackUp} from '../actions/playerAttack'
import {winGame, loseGame} from '../actions/gameRunning'

const mapStateToProps = (state) => {
  return {
    enemies: state.enemies,
    player: state.player
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playerMoveLeft: () => {dispatch(playerMoveLeft()) },
    playerMoveRight: () => {dispatch(playerMoveRight()) },
    playerMoveUp: () => {dispatch(playerMoveUp()) },
    playerMoveDown: () => {dispatch(playerMoveDown()) },
    playerAttackLeft: (enemy) => {dispatch(playerAttackLeft(enemy)) },
    playerAttackRight: (enemy) => {dispatch(playerAttackRight(enemy)) },
    playerAttackUp: (enemy) => {dispatch(playerAttackUp(enemy)) },
    playerAttackDown: (enemy) => {dispatch(playerAttackDown(enemy)) },
    winGame: () => {dispatch(winGame())},
    loseGame: () => {dispatch(loseGame())}
  }
}

const GameConnector = connect(mapStateToProps, mapDispatchToProps)(Game)

export default GameConnector
