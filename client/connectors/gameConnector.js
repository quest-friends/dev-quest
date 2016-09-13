import React from 'react'
import {connect} from 'react-redux'
import Game from '../components/game'
import {playerMove} from '../actions/playerMovement'
import {playerAttack} from '../actions/playerActions'
import {allEnemiesAct} from '../actions/enemyActions'
import {loseGame, winGame} from '../actions/gameRunning'
import {pickUpItem} from '../actions/pickUpItem'
import {stepOnGotcha} from '../actions/gotchaActions'

const mapStateToProps = (state) => {
  return {
    enemies: state.enemies,
    player: state.player,
    items: state.items,
    gotchas: state.gotchas
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playerMove: (y, x) => {dispatch(playerMove(y, x)) },
    playerAttack: (enemy) => {dispatch(playerAttack(enemy)) },
    pickUpItem: (item) => {dispatch(pickUpItem(item))},
    stepOnGotcha: (gotcha) => {dispatch(stepOnGotcha(gotcha))},
    winGame: () => {dispatch(winGame())},
    allEnemiesAct: () => {dispatch(allEnemiesAct()) },
    loseGame: () => {dispatch(loseGame())}
  }
}

const GameConnector = connect(mapStateToProps, mapDispatchToProps)(Game)

export default GameConnector
