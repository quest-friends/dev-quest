import React from 'react'
import BoardConnector from '../connectors/boardConnector'

class Game extends React.Component {

  constructor(props){
    super(props)

  }

  componentDidMount() {
    var { enemies, player } = this.props
    var presentEnemy
    //This works for firefox
    document.addEventListener("keypress", (evt) => {
      evt.preventDefault()
    })
    //This works for Chrome
    document.addEventListener("keydown", (evt) => {
      evt.preventDefault()
    })
    document.addEventListener("keyup", (evt) => {
      switch(evt.key) {
        case('ArrowLeft'):
          presentEnemy = enemies.find(function(enemy) {
            return (enemy.position.y == player.position.y && enemy.position.x == player.position.x-1)
          })
          if(presentEnemy) {
            this.props.playerAttackLeft(presentEnemy)
          }else{
            this.props.playerMoveLeft()
          }
          break;
        case('ArrowRight'):
          presentEnemy = enemies.find(function(enemy) {
            return (enemy.position.y == player.position.y && enemy.position.x == player.position.x+1)
          })
          if(presentEnemy) {
            this.props.playerAttackRight(presentEnemy)
          }else{
            this.props.playerMoveRight()
          }
          break;
        case('ArrowUp'):
          presentEnemy = enemies.find(function(enemy) {
            return (enemy.position.y == player.position.y-1 && enemy.position.x == player.position.x)
          })
          if(presentEnemy) {
            this.props.playerAttackUp(presentEnemy)
          }else{
            this.props.playerMoveUp()
          }
          break;
        case('ArrowDown'):
          presentEnemy = enemies.find(function(enemy) {
            return (enemy.position.y == player.position.y+1 && enemy.position.x == player.position.x)
          })
          if(presentEnemy) {
            this.props.playerAttackDown(presentEnemy)
          }else{
            this.props.playerMoveDown()
          }
      }
    })
  }

  render(){
    return (
      <div>
        <h1> This is rendered by game.js </h1>
        <BoardConnector />
        <button onClick={this.props.winGame} > win the game!</button>
        <button onClick={this.props.loseGame} > lose the game!</button>
      </div>
    )
  }
}

export default Game
