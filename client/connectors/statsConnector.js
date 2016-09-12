import React from 'react'
import {connect} from 'react-redux'
import PlayerStats from '../components/playerStats'

const mapStateToProps = (state) => {
  return {
    playerHealth: state.player.health,
    playerCharge: state.player.charge,
    playerXP: state.player.xp
  }
}

const statsConnector = connect(mapStateToProps)(PlayerStats)

export default statsConnector
