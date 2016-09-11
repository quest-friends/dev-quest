import React from 'react'
import {connect} from 'react-redux'
import ConsoleLog from '../components/consoleLog'

const mapStateToProps = (state) => {
  return {
    playerHealth: state.player.health,
    playerXP: state.player.xp
  }
}

const consoleLogConnector = connect(mapStateToProps)(ConsoleLog)

export default consoleLogConnector
