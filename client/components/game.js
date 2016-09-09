import React from 'react'
import BoardConnector from '../connectors/boardConnector'

class Game extends React.Component {

  constructor(props){
    super(props)

  }

  componentDidMount() {
    document.addEventListener("keyup", (evt) => {
      switch(evt.key) {
        case('ArrowLeft'):
          this.props.playerMoveLeft()
          break;
        case('ArrowRight'):
          this.props.playerMoveRight()
          break;
        case('ArrowUp'):
          this.props.playerMoveUp()
          break;
        case('ArrowDown'):
          this.props.playerMoveDown()
          break;
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
