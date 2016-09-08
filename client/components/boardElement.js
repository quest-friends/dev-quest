import React from 'react'
import Tile from './tile'
import PlayerConnector from '../connectors/playerConnector'


class BoardElement extends React.Component {

  isPlayerPresent() {
    const {playerPosition, i, j} = this.props
    return i == playerPosition.y && j == playerPosition.x
  }

  render(){
    return (
      <div className='board-element'>
        <Tile />
        { this.isPlayerPresent() ? <PlayerConnector /> : '' }
      </div>

    )
  }
}

export default BoardElement
