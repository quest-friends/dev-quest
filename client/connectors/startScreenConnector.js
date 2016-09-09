import React from 'react'
import {connect} from 'react-redux'
import StartScreen from '../components/startScreen'
import { startGame } from '../actions/gameRunning'

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: () => {dispatch(startGame())}
  }
}

const startScreenConnector = connect(null, mapDispatchToProps)(StartScreen)

export default startScreenConnector
