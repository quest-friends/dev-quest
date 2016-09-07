import React from 'react'
import Board from './board'

class Game extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <h1> This is rendered by game.js </h1>
        <Board />
      </div>
    )
  }
}

export default Game
