import React from 'react'
import {connect} from 'react-redux'
import Player from '../components/player'
import {setPlayerAttackedToFalse} from '../actions/playerActions'
import { startGame } from '../actions/gameRunning'

const mapStateToProps = (state) => {
  return {
    hasBeenAttacked: state.player.hasBeenAttacked,
    type: state.player.type
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPlayerAttackedToFalse: () => {dispatch(setPlayerAttackedToFalse())}
  }
}

const playerConnector = connect(mapStateToProps, mapDispatchToProps)(Player)

export default playerConnector
