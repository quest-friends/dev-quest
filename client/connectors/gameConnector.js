import React from 'react'
import {connect} from 'react-redux'
import Game from '../components/game'
import {playerMove} from '../actions/playerMovement'
import {playerAttack} from '../actions/playerAttack'
import {allEnemiesAct} from '../actions/enemyActions'
import {loseGame, winGame} from '../actions/gameRunning'

const mapStateToProps = (state) => {
  return {
    enemies: state.enemies,
    player: state.player
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playerMove: (y, x) => {dispatch(playerMove(y, x)) },
    playerAttack: (enemy) => {dispatch(playerAttack(enemy)) },
    winGame: () => {dispatch(winGame())},
    allEnemiesAct: () => {dispatch(allEnemiesAct()) },
    loseGame: () => {dispatch(loseGame())}
  }
}

const GameConnector = connect(mapStateToProps, mapDispatchToProps)(Game)

export default GameConnector
