import React from 'react'
import BoardElement from './boardElement'

class Board extends React.Component {
  render(){

    const {tileGrid, playerPosition, enemies, items, currentLevel} = this.props
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
                  currentLevel={currentLevel}
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
