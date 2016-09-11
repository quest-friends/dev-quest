import React from 'react'
import {connect} from 'react-redux'
import Game from '../components/game'
import {playerMove} from '../actions/playerMovement'
import {playerAttack} from '../actions/playerAttack'
import {allEnemiesAct} from '../actions/enemyActions'
import {loseGame, winGame} from '../actions/gameRunning'
import {itemPickup} from '../actions/itemActions'
import {playerItemPickup} from '../actions/playerItemPickup'

const mapStateToProps = (state) => {
  return {
    enemies: state.enemies,
    player: state.player,
    items: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playerMove: (y, x) => {dispatch(playerMove(y, x)) },
    playerAttack: (enemy) => {dispatch(playerAttack(enemy)) },
    playerItemPickup: (item) => {dispatch(playerItemPickup(item))},
    winGame: () => {dispatch(winGame())},
    allEnemiesAct: () => {dispatch(allEnemiesAct()) },
    loseGame: () => {dispatch(loseGame())},
    itemPickup: () => {dispatch(itemPickup())}
  }
}

const GameConnector = connect(mapStateToProps, mapDispatchToProps)(Game)

export default GameConnector
