import React from 'react'
import {connect} from 'react-redux'
import Enemy from '../components/enemy'
import { enemyAttack } from '../actions/enemyAttack'

const mapStateToProps = (state) => {
  return {
    enemies: state.enemies,
    playerX: state.player.position.x,
    playerY: state.player.position.y,
    playerHealth: state.player.health
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    enemyAttack: () => { dispatch(enemyAttack()) }
  }
}

const enemyConnector = connect(mapStateToProps, mapDispatchToProps)(Enemy)

export default enemyConnector
