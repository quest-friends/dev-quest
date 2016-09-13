import React from 'react'
import {connect} from 'react-redux'
import Gotcha from '../components/gotcha'

const mapStateToProps = (state) => {
  return {
    gotchas: state.gotchas
  }
}

const gotchaConnector = connect(mapStateToProps)(Gotcha)

export default gotchaConnector
