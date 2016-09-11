import React from 'react'
import {connect} from 'react-redux'
import Item from '../components/item'

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

const itemConnector = connect(mapStateToProps)(Item)

export default itemConnector
