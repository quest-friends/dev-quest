import React from 'react'
import {connect} from 'react-redux'
import LossScreen from '../components/lossScreen'
import { startGame } from '../actions/gameRunning'

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: () => {dispatch(startGame())}
  }
}

const lossScreenConnector = connect(null, mapDispatchToProps)(LossScreen)

export default lossScreenConnector
