import React from 'react'
import {connect} from 'react-redux'
import ConsoleLog from '../components/consoleLog'
import PlayerStats from '../components/playerStats'

const mapStateToProps = (state) => {
  return {

  }
}

const UIConnector = connect(mapStateToProps)(ConsoleLog, PlayerStats)
