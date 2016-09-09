import React from 'react'
import {connect} from 'react-redux'
import WinScreen from '../components/winScreen'
import { startGame } from '../actions/gameRunning'

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: () => {dispatch(startGame())}
  }
}

const winScreenConnector = connect(null, mapDispatchToProps)(WinScreen)

export default winScreenConnector
