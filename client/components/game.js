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
      }
    })
  }

  render(){
    return (
      <div>
        <BoardConnector />
        <button onClick={this.props.nextLevel} > next Level!</button>
        <button onClick={this.props.loseGame} > lose the game!</button>
      </div>
    )
  }
}

export default Game
