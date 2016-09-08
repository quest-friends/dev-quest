import React from 'react'
import Tile from './tile'
import PlayerConnector from '../connectors/playerConnector'


class BoardElement extends React.Component {

  isFloorOrWall() {
    const {tileGrid, i, j} = this.props
    const tileType = tileGrid[i][j]
    return tileType
  }

  isPlayerPresent() {
    const {playerPosition, i, j} = this.props
    return i == playerPosition.y && j == playerPosition.x
  }

  render(){
    return (
      <div className='board-element'>
        <Tile tileType={this.isFloorOrWall()} />
        { this.isPlayerPresent() ? <PlayerConnector /> : '' }
      </div>

    )
  }
}

export default BoardElement


// { condition ? truecase : falsecase }

// if (condition) { truecase} else {falsecase}
