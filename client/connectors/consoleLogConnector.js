import React from 'react'
import {connect} from 'react-redux'
import ConsoleLog from '../components/consoleLog'

const mapStateToProps = (state) => {
  return {
    loggedMessages: state.loggedMessages
  }
}

const consoleLogConnector = connect(mapStateToProps)(ConsoleLog)

export default consoleLogConnector
