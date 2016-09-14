import React from 'react'
import BoardConnector from '../connectors/boardConnector'
import StatsConnector from '../connectors/statsConnector'
import ConsoleLogConnector from '../connectors/consoleLogConnector'

class Game extends React.Component {

  isArrowKey (key) {
    return ['ArrowLeft', 'ArrowRight', 'ArrowDown', 'ArrowUp'].indexOf(key) > -1
  }

  isPlayerDead () {
    return (this.props.player.health <= 0 || this.props.player.charge <= 0)
  }

  componentDidMount () {

  document.addEventListener('keydown', (evt) => {
    if (this.isArrowKey(evt.key)) {
      evt.preventDefault()
    }
  })

  document.addEventListener('keyup', (evt) => {
      const {y, x} = this.props.player.position
      const {enemies, items, gotchas, allEnemiesAct} = this.props

      if(evt.keyCode == 32) {
        setTimeout(function () { allEnemiesAct() }, 50)

        if (this.isPlayerDead()) {
          this.props.loseGame()
        }
      }

      if (this.isArrowKey(evt.key)) {
        var nextPosition = {x, y}
        switch (evt.key) {
          case 'ArrowLeft':
            nextPosition = {y: y, x: x - 1}
            break;
          case 'ArrowRight':
            nextPosition = {y: y, x: x + 1}
            break;
          case 'ArrowUp':
            nextPosition = {y: y - 1, x: x}
            break;
          case 'ArrowDown':
            nextPosition = {y: y + 1, x: x}
        }

        const enemyInTile = enemies.find(function (enemy) {
          return (enemy.position.y == nextPosition.y && enemy.position.x == nextPosition.x)
        })

        const itemInTile = items.find(function (item) {
          return (item.position.y == nextPosition.y && item.position.x == nextPosition.x)
        })

        const gotchaInTile = gotchas.find(function (gotcha) {
          return (gotcha.position.y == nextPosition.y && gotcha.position.x == nextPosition.x)
        })

        if (enemyInTile) {
          this.props.playerAttack (enemyInTile)
        }

        else {
          this.props.playerMove (nextPosition.y, nextPosition.x)
          if (itemInTile) {
            this.props.pickUpItem (itemInTile)
          }
          if (gotchaInTile && gotchaInTile.triggered==false) {
            this.props.triggerGotcha(gotchaInTile)
          }
        }

        setTimeout(function () { allEnemiesAct() }, 50)

        if (this.isPlayerDead()) {
          this.props.loseGame()
        }
      }
    })
  }

  render () {
    return (
      <div className="display-screen">
        <div className='board-container'>
          <BoardConnector />
        </div>
        <div className='ui-container'>
          <ConsoleLogConnector />
          <StatsConnector />
        </div>
      </div>
    )
  }
}

export default Game
