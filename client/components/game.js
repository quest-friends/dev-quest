import React from 'react'
import BoardConnector from '../connectors/boardConnector'
import StatsConnector from '../connectors/statsConnector'
import ConsoleLogConnector from '../connectors/consoleLogConnector'

class Game extends React.Component {

  constructor(props){
    super(props)

  }

  isPlayerDead() {
    return this.props.player.health <= 0
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

    document.addEventListener("keydown", (evt) => {
        var {y, x} = player.position

      switch(evt.key) {

        case('ArrowLeft'):
          presentEnemy = enemies.find(function(enemy) {
            return (enemy.position.y == y && enemy.position.x == x-1)
          })
          if(presentEnemy) {
            this.props.playerAttack(presentEnemy)
          }else{
            this.props.playerMove( y, x - 1 )
          }
          this.props.allEnemiesAct()
          if(this.isPlayerDead()){
            this.props.loseGame()
          }
          break;

        case('ArrowRight'):
          presentEnemy = enemies.find(function(enemy) {
            return (enemy.position.y == y && enemy.position.x == x+1)
          })
          if(presentEnemy) {
            this.props.playerAttack(presentEnemy)
          }else{
            this.props.playerMove( y, x + 1 )
          }
          this.props.allEnemiesAct()
          if(this.isPlayerDead()){
            this.props.loseGame()
          }
          break;

        case('ArrowUp'):
          presentEnemy = enemies.find(function(enemy) {
            return (enemy.position.y == y-1 && enemy.position.x == x)
          })
          if(presentEnemy) {
            this.props.playerAttack(presentEnemy)
          }else{
            this.props.playerMove( y - 1, x )
          }
          this.props.allEnemiesAct()
          if(this.isPlayerDead()){
            this.props.loseGame()
          }
          break;

        case('ArrowDown'):
          presentEnemy = enemies.find(function(enemy) {
            return (enemy.position.y == y+1 && enemy.position.x == x)
          })
          if(presentEnemy) {
            this.props.playerAttack(presentEnemy)
          }else{
            this.props.playerMove( y + 1, x )
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
