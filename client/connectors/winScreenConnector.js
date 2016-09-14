import React from 'react'
import {connect} from 'react-redux'
import WinScreen from '../components/winScreen'

const mapStateToProps = (state) => {
  return {
    health: state.player.health,
    charge: state.player.charge,
    experience: state.player.xp,
    attack: state.player.attack
    }
}

const winScreenConnector = connect(mapStateToProps)(WinScreen)

export default winScreenConnector
