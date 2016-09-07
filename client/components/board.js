import React from 'react'
import Tile from './tile'

class Board extends React.Component {

  constructor(props){
    super(props)

    

    console.log(this.state);

  }

  // {for (let i = 1; i < this.initialState.board.length; i++)}
  render(){
    return (
      <div>
        <h1> This is rendered by board.js </h1>
        <div>
          <Tile />
        </div>
      </div>
    )
  }
}

export default Board
