import React from 'react'
import {connect} from 'react-redux'
import Board from '../components/board'

const mapStateToProps = (state) => {
  return {
    tileGrid: state.tileGrid,
    playerPosition: state.player.position,
    playerX: state.player.position.x,
    playerY: state.player.position.y,
//note - we should check if these are necessary as enemies probably render w player
    // enemyX: state.enemies.enemy.position.x,
    // enemyY: state.enemies.enemy.position.y,
//this is now an array from the state
    enemies: state.enemies
  }
}

const boardConnector = connect(mapStateToProps)(Board)

export default boardConnector
