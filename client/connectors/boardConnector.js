import React from 'react'
import {connect} from 'react-redux'
import Board from '../components/board'

const mapStateToProps = (state) => {
  return {
    tileGrid: state.tileGrid,
    playerPosition: state.player.position,
    playerHealth: state.player.health,
    enemies: state.enemies,
    items: state.items,
    gotchas: state.gotchas,
    currentLevel: state.currentLevel
  }
}

const boardConnector = connect(mapStateToProps)(Board)

export default boardConnector
