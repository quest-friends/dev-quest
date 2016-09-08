import React from 'react'
import {connect} from 'react-redux'
import Player from '../components/player'

const mapStateToProps = (state) => {
  return { player: state.player }
}

const playerConnector = connect(mapStateToProps)(Player)

export default playerConnector
