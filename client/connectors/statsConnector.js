import React from 'react'
import {connect} from 'react-redux'
import PlayerStats from '../components/playerStats'

const mapStateToProps = (state) => {
  return {
    type: state.player.type,
    health: state.player.health,
    xp: state.player.xp,
    charge: state.player.charge,
    attack: state.player.attack,
    defence: state.player.defence
  }
}

const statsConnector = connect(mapStateToProps)(PlayerStats)

export default statsConnector
