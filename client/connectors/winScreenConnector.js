import React from 'react'
import {connect} from 'react-redux'
import WinScreen from '../components/winScreen'

const mapStateToProps = (state) => {
  return {
    health: state.player.health,
    charge: state.player.charge
    }
}

const winScreenConnector = connect(mapStateToProps)(WinScreen)

export default winScreenConnector
