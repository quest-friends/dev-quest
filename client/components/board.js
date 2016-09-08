import React from 'react'
import Tile from './tile'
import PlayerConnector from '../connectors/playerConnector'


class Board extends React.Component {

  constructor(props){
    super(props)




  }
  render(){
    return (
      <div>
        <h1> This is rendered by board.js </h1>
        <div>
          {this.props.tileGrid.map((row, i) => {
            return row.map((tile, j) => {
              if (i == this.props.playerPosition.y && j == this.props.playerPosition.x) {
                return(
                  <div className='tile-container'>
                    <Tile />
                    <PlayerConnector />
                  </div>
                  )
              }
                else {
                return(
                  <div className='tile-container'>
                    <Tile />
                  </div>
                  )
              }
            })
          })
        }
        </div>
      </div>
    )
  }
}

export default Board
