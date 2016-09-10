import React from 'react'
import {connect} from 'react-redux'
import Enemy from '../components/enemy'

// const mapStateToProps = (state) => {
//   return {
//     type: state.enemies
//   }
// }

const enemyConnector = connect(null)(Enemy)

export default enemyConnector
