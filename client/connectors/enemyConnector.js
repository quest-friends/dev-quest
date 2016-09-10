import React from 'react'
import {connect} from 'react-redux'
import Enemy from '../components/enemy'

const mapStateToProps = (state) => {
  return {
    enemies: state.enemies,
    playerX: state.player.position.x,
    playerY: state.player.position.y
  }
}

const enemyConnector = connect(mapStateToProps)(Enemy)

export default enemyConnector
