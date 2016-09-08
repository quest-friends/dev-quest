import React from 'react'
import {connect} from 'react-redux'
import StartScreen from '../components/startScreen'
import { startGame } from '../actions/gameRunning'

const mapStateToProps = (state) => {
  return {
    tileGrid: state.gameRunning.tileGrid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: () => {dispatch(startGame())}
  }
}

const startScreenConnector = connect(mapStateToProps, mapDispatchToProps)(StartScreen)

export default startScreenConnector
