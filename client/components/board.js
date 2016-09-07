import React from 'react'
import Tile from './tile'
import PlayerConnector from '../connectors/playerConnector'


class Board extends React.Component {

  constructor(props){
    super(props)




  }

  // {for (let i = 1; i < this.initialState.board.length; i++)}
  render(){
    console.log(this.props.board);
    return (
      <div>
        <h1> This is rendered by board.js </h1>
        <div>
          {this.props.board.map((row) => {
            return row.map((tile) => {
              return <Tile />
            })
          })}
        </div>
        <PlayerConnector />
      </div>
    )
  }
}

export default Board
