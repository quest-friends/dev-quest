import React from 'react'
import Tile from './tile'

class Board extends React.Component {

  constructor(props){
    super(props)




  }

  render(){
    return (
      <div>
        <h1> This is rendered by board.js </h1>
        <div>
          {this.props.tileGrid.map((row) => {
            return row.map((tile) => {
              return <Tile />
            })
          })}
        </div>
      </div>
    )
  }
}

export default Board
