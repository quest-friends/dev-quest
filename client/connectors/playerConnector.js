import React from 'react'
import {connect} from 'react-redux'
import Player from '../components/player'

const mapStateToProps = (state) => {
  return {
    x: state.player.position.x,
    y: state.player.position.y
    }
}

const playerConnector = connect(mapStateToProps)(Player)

export default playerConnector
