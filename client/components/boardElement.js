import React from 'react'
import Tile from './tile'
import EnemyConnector from '../connectors/enemyConnector'
import PlayerConnector from '../connectors/playerConnector'
import ItemConnector from '../connectors/itemConnector'
import GotchaConnector from '../connectors/gotchaConnector'

class BoardElement extends React.Component {

  whatIsTileType() {
    const {tileGrid, yCoord, xCoord} = this.props
    const tileType = tileGrid[yCoord][xCoord]
    return tileType
  }

  whatIsCurrentLevel(){
    return this.props.currentLevel
  }

  isPlayerPresent() {
    const {playerPosition, yCoord, xCoord} = this.props
    return yCoord == playerPosition.y && xCoord == playerPosition.x
  }

  isEnemyPresent() {
    const {enemies, yCoord, xCoord} = this.props
    const enemyInTile = enemies.find( (enemy) => {
      return enemy.position.y==yCoord && enemy.position.x==xCoord
    })
    return enemyInTile
  }

  isItemPresent() {
    const {items, yCoord, xCoord} = this.props
    const itemInTile = items.find( (item) => {
      return item.position.y==yCoord && item.position.x==xCoord
    })
    return itemInTile
  }

  isGotchaPresent() {
    const {gotchas, yCoord, xCoord} = this.props
    const gotchaInTile = gotchas.find( (gotcha) => {
      return gotcha.position.y==yCoord && gotcha.position.x==xCoord
    })
    return gotchaInTile
  }

  render(){
    const {xCoord, yCoord} = this.props

    return (
      <div className='board-element'>
        <Tile tileType={this.whatIsTileType()} currentLevel={this.whatIsCurrentLevel()} />
        { this.isGotchaPresent() ? <GotchaConnector x={xCoord} y={yCoord} /> : null }
        { this.isItemPresent() ? <ItemConnector x={xCoord} y={yCoord} /> : null }
        { this.isEnemyPresent() ? <EnemyConnector x={xCoord} y={yCoord} /> : null }
        { this.isPlayerPresent() ? <PlayerConnector /> : null }
      </div>
    )
  }
}

export default BoardElement
