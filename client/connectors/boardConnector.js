import React from 'react'
import {connect} from 'react-redux'
import Board from '../components/board'

const mapStateToProps = (state) => {
  return {
    tileGrid: state.tileGrid,
    playerPosition: state.player.position,
    enemyPosition: state.enemies.enemy.position,
    playerX: state.player.position.x,
    playerY: state.player.position.y,
    enemyX: state.enemies.enemy.position.x,
    enemyY: state.enemies.enemy.position.y
  }
}

const boardConnector = connect(mapStateToProps)(Board)

export default boardConnector
