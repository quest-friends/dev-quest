import React from 'react'
import BoardConnector from '../connectors/boardConnector'
import StatsConnector from '../connectors/statsConnector'
import ConsoleLogConnector from '../connectors/consoleLogConnector'

class Game extends React.Component {

  constructor(props){
    super(props)

  }

  isPlayerDead() {
    return this.props.player.health == 0
  }

  componentDidMount() {

    var { enemies, player } = this.props
    var presentEnemy

    //This works for firefox
    document.addEventListener("keypress", (evt) => {
      if(evt.key == 'ArrowLeft' || evt.key == 'ArrowRight' || evt.key == 'ArrowDown' || evt.key == 'ArrowUp' ){
        evt.preventDefault()
      }
    })

    //This works for Chrome
    document.addEventListener("keydown", (evt) => {
      if(evt.key == 'ArrowLeft' || evt.key == 'ArrowRight' || evt.key == 'ArrowDown' || evt.key == 'ArrowUp' ){
        evt.preventDefault()
      }
    })

    document.addEventListener("keyup", (evt) => {
      switch(evt.key) {

        case('ArrowLeft'):
          presentEnemy = enemies.find(function(enemy) {
            return (enemy.position.y == player.position.y && enemy.position.x == player.position.x-1)
          })
          if(presentEnemy) {
            this.props.playerAttack(presentEnemy)
          }else{
            this.props.playerMoveLeft()
          }
          this.props.allEnemiesAct()
          if(this.isPlayerDead()){
            this.props.loseGame()
          }
          break;

        case('ArrowRight'):
          presentEnemy = enemies.find(function(enemy) {
            return (enemy.position.y == player.position.y && enemy.position.x == player.position.x+1)
          })
          if(presentEnemy) {
            this.props.playerAttack(presentEnemy)
          }else{
            this.props.playerMoveRight()
          }
          this.props.allEnemiesAct()
          if(this.isPlayerDead()){
            this.props.loseGame()
          }
          break;

        case('ArrowUp'):
          presentEnemy = enemies.find(function(enemy) {
            return (enemy.position.y == player.position.y-1 && enemy.position.x == player.position.x)
          })
          if(presentEnemy) {
            this.props.playerAttack(presentEnemy)
          }else{
            this.props.playerMoveUp()
          }
          this.props.allEnemiesAct()
          if(this.isPlayerDead()){
            this.props.loseGame()
          }
          break;

        case('ArrowDown'):
          presentEnemy = enemies.find(function(enemy) {
            return (enemy.position.y == player.position.y+1 && enemy.position.x == player.position.x)
          })
          if(presentEnemy) {
            this.props.playerAttack(presentEnemy)
          }else{
            this.props.playerMoveDown()
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
          <ConsoleLogConnector /> <br />
          <StatsConnector />
        </div>
        
      </div>
    )
  }
}

export default Game
