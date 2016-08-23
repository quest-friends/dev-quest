import React from 'react'
import VetClinic from '../components/vetClinic'
import Shop from '../components/shop'

function App (props) {
  return (
    <div>
      <h1>Welcome to {props.name}</h1>
      <VetClinic />
      <Shop />
    </div>
  )
}

export default App
