import React from 'react'
import BoardElement from './boardElement'

class Board extends React.Component {
  render(){
    const {tileGrid, playerPosition, enemies, items, gotchas} = this.props
    return (
      <div>
        <div className="grid">
          {tileGrid.map((row, i) => {
            return row.map((tile, j) => {
              return (
                <BoardElement
                  playerPosition={playerPosition}
                  enemies={enemies}
                  i={i}
                  j={j}
                  tileGrid={tileGrid}
                  items={items}
                  gotchas={gotchas}
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
