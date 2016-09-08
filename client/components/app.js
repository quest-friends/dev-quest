import React from 'react'
import GameConnector from '../connectors/gameConnector'

class App extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <h1> This is rendered by app.js </h1>
        <GameConnector />
      </div>
    )
  }
}

export default App
