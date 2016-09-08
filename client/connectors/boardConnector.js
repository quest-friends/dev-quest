import React from 'react'
import {connect} from 'react-redux'
import Board from '../components/board'

const mapStateToProps = (state) => {
  return { tileGrid: state.reducer.tileGrid, playerPosition: state.position, playerX: state.position.x, playerY: state.position.y }
}

const boardConnector = connect(mapStateToProps)(Board)

export default boardConnector
