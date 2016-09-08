import React from 'react'
import BoardConnector from '../connectors/boardConnector'

class Game extends React.Component {

  constructor(props){
    super(props)

  }

  componentDidMount() {
    document.addEventListener("keydown", (key) => {
      switch(key.key) {
        case('ArrowLeft'):
          return console.log(key.key)
        case('ArrowRight'):
          return console.log(key.key)
        case('ArrowUp'):
          return console.log(key.key)
        case('ArrowDown'):
          return console.log(key.key);
      }
      // console.log(key.key);
    })
  }

  render(){
    return (
      <div>
        <h1> This is rendered by game.js </h1>
        <BoardConnector />
      </div>
    )
  }
}

export default Game
