import React from 'react'
import Tile from './tile'
import EnemyConnector from '../connectors/enemyConnector'
import PlayerConnector from '../connectors/playerConnector'
import ItemConnector from '../connectors/itemConnector'
import GotchaConnector from '../connectors/gotchaConnector'

class BoardElement extends React.Component {

  whatIsTileType() {
    const {tileGrid, i, j} = this.props
    const tileType = tileGrid[i][j]
    return tileType
  }

  whatIsCurrentLevel(){
    return this.props.currentLevel
  }

  isPlayerPresent() {
    const {playerPosition, i, j} = this.props
    return i == playerPosition.y && j == playerPosition.x
  }

  isEnemyPresent() {
    const {enemies, i, j} = this.props
    const presentEnemy = enemies.find( (enemy) => {
      return enemy.position.y==i && enemy.position.x==j
    })
    return presentEnemy
  }

  isItemPresent() {
    const {items, i, j} = this.props
    const presentItem = items.find( (item) => {
      return item.position.y==i && item.position.x==j
    })
    return presentItem
  }

  isGotchaPresent() {
    const {gotchas, i, j} = this.props
    const presentGotcha = gotchas.find( (gotcha) => {
      return gotcha.position.y==i && gotcha.position.x==j
    })
    return presentGotcha
  }

  render(){
    return (
      <div className='board-element'>
        <Tile tileType={this.whatIsTileType()} currentLevel={this.whatIsCurrentLevel()} />
        { this.isGotchaPresent() ? <GotchaConnector
          x={this.props.j}
          y={this.props.i}
          />
          : null }
        { this.isItemPresent() ? <ItemConnector
          x={this.props.j}
          y={this.props.i}
          />
        : null }
        { this.isEnemyPresent() ? <EnemyConnector
            x={this.props.j}
            y={this.props.i}
            />
          : null }
        { this.isPlayerPresent() ? <PlayerConnector /> : null }

      </div>
    )
  }
}

export default BoardElement
