import React from 'react'
import {connect} from 'react-redux'
import Enemy from '../components/enemy'

const mapStateToProps = (state) => {
  return {
    x: state.enemies.enemy.position.x,
    y: state.enemies.enemy.position.y
    }
}

const enemyConnector = connect(mapStateToProps)(Enemy)

export default enemyConnector
