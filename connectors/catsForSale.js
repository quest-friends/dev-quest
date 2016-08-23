import React from 'react'
import { connect } from 'react-redux'
import Cats from '../components/cats'

const mapStateToProps = function (state) {
  return {cats: state.shop.cats}
}

const CatsForSale = connect(mapStateToProps)(Cats)
export default CatsForSale
