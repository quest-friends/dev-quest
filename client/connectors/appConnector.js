import React from 'react'
import {connect} from 'react-redux'
import App from '../components/app'

const mapStateToProps = (state) => {
  return { isGameRunning: state.isGameRunning }
}

const appConnector = connect(mapStateToProps)(App)

export default appConnector
