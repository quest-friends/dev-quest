import React from 'react'
import {connect} from 'react-redux'
import Player from '../components/player'
import {setPlayerAttackedToFalse} from '../actions/playerActions'

const mapStateToProps = (state) => {
  return {
    x: state.player.position.x,
    y: state.player.position.y,
    health: state.player.health,
    hasBeenAttacked: state.player.hasBeenAttacked
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPlayerAttackedToFalse: () => {dispatch(setPlayerAttackedToFalse())}
  }
}

const playerConnector = connect(mapStateToProps, mapDispatchToProps)(Player)

export default playerConnector
