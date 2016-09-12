import React from 'react'
import BoardConnector from '../connectors/boardConnector'
import StatsConnector from '../connectors/statsConnector'
import ConsoleLogConnector from '../connectors/consoleLogConnector'

class Game extends React.Component {

  isArrowKey(key) {
    return (key == 'ArrowLeft' || key == 'ArrowRight' || key == 'ArrowDown' || key == 'ArrowUp' )
  }

  isPlayerDead() {
    return (this.props.player.health <= 0 || this.props.player.charge <= 0)
  }

  componentDidMount() {
    var { player } = this.props
    var presentEnemy
    var presentItem

    //This removes defaults for firefox
    document.addEventListener("keypress", (evt) => {
      if(this.isArrowKey(evt.key)){
        evt.preventDefault()
      }
    })

    //This removes defaults for Chrome
    document.addEventListener("keydown", (evt) => {
        var {y, x} = player.position
        if (this.isArrowKey(evt.key)) {
          evt.preventDefault()
          var nextPosition = {x, y}
          switch(evt.key){
            case 'ArrowLeft':
              nextPosition = {y:y,x:x-1}
              break;
            case 'ArrowRight':
              nextPosition = {y:y,x:x+1}
              break;
            case 'ArrowUp':
              nextPosition = {y:y-1,x:x}
              break;
            case 'ArrowDown':
              nextPosition = {y:y+1,x:x}
          }

          presentEnemy = this.props.enemies.find(function(enemy) {
            return (enemy.position.y == nextPosition.y && enemy.position.x == nextPosition.x)
          })

          presentItem = this.props.items.find(function(item) {
            return (item.position.y == nextPosition.y && item.position.x == nextPosition.x)
          })

          if (presentEnemy) {
            this.props.playerAttack(presentEnemy)
          }
          else if (presentItem) {
            this.props.pickUpItem(presentItem)
          }
          else {
            this.props.playerMove( nextPosition.y, nextPosition.x )
            }

          this.props.allEnemiesAct()
          if(this.isPlayerDead()){
            this.props.loseGame()
          }
        }
    })
  }

  render(){
    return (
      <div>
        <div className="board-container">
          <BoardConnector />
        </div>
        <div className="ui-container">
          <ConsoleLogConnector />
          <StatsConnector />
        </div>
      </div>
    )
  }
}

export default Game
