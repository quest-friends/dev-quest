import React from 'react'
import BoardElement from './boardElement'


class Board extends React.Component {


  componentDidMount() {
    document.addEventListener("keydown", (key) => {
      switch(key.key) {
        case('ArrowLeft'):
          return console.log(key.key)
        case('ArrowRight'):
          return console.log(key.key)
        case('ArrowUp'):
          return console.log(key.key)
        case('ArrowDown'):
          return console.log(key.key);
      }
    })
  }


  render(){
    const {tileGrid, playerPosition} = this.props

    return (
      <div>
        <h1> This is rendered by board.js </h1>
        <div className="grid">
          {tileGrid.map((row, i) => {
            return row.map((tile, j) => {
              return (
                <BoardElement
                  playerPosition={playerPosition}
                  i={i}
                  j={j}
                />
              )
            })
          })
        }
        </div>
      </div>
    )
  }
}

export default Board
