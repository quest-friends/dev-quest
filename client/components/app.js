import React from 'react'
import Game from './game'

class App extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <h1> This is rendered by app.js </h1>
        <Game />
      </div>
    )
  }
}

export default App
