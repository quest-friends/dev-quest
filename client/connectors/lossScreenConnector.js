import React from 'react'
import {connect} from 'react-redux'
import LossScreen from '../components/lossScreen'

const mapStateToProps = (state) => {
  return {
    health: state.player.health,
    charge: state.player.charge
    }
}

const startScreenConnector = connect(mapStateToProps)(LossScreen)

export default lossScreenConnector
