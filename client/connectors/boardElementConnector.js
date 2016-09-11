import React from 'react'
import {connect} from 'react-redux'
import BoardElement from '../components/boardElement'

const mapStateToProps = (state) => {
  return { enemies: state.enemies,
            enemyCount: state.enemyCount}
}

const boardElementConnector = connect(mapStateToProps)(BoardElement)

export default boardElementConnector
