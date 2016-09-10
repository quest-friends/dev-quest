import React from 'react'
import {connect} from 'react-redux'
import Game from '../components/game'
import {playerMoveLeft, playerMoveRight, playerMoveDown, playerMoveUp} from '../actions/playerMovement'
import {playerAttack} from '../actions/playerAttack'
import {allEnemiesAct} from '../actions/enemyActions'
import {nextLevel, loseGame, winGame} from '../actions/gameRunning'

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
    playerAttack: (enemy) => {dispatch(playerAttack(enemy)) },
    allEnemiesAct: () => {dispatch(allEnemiesAct()) },
    winGame: () => {dispatch(loseGame())},
    loseGame: () => {dispatch(loseGame())},
    nextLevel: () => {dispatch(nextLevel())}
  }
}

const GameConnector = connect(mapStateToProps, mapDispatchToProps)(Game)

export default GameConnector
