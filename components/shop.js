import React from 'react'
import CatsForSale from '../connectors/catsForSale'

function Shop (props) {
  return (
    <div>
      <h2>This is the shop</h2>
      <h3>These are the cats in the vet clinic</h3>
      <CatsForSale />
    </div>
  )
}

export default Shop
