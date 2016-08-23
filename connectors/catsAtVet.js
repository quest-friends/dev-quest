import React from 'react'
import { connect } from 'react-redux'
import Cats from '../components/cats'

const mapStateToProps = function (state) {
  return {cats: state.vetClinic.cats}
}

const CatsAtVet = connect(mapStateToProps)(Cats)
export default CatsAtVet
