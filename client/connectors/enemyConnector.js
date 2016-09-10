import React from 'react'
import {connect} from 'react-redux'
import Enemy from '../components/enemy'

const mapStateToProps = (state) => {
  return {
    enemies: state.enemies
  }
}

const enemyConnector = connect(mapStateToProps)(Enemy)

export default enemyConnector
