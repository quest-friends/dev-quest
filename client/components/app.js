import React from 'react'
import GameConnector from '../connectors/gameConnector'
import StartScreenConnector from '../connectors/startScreenConnector'


class App extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <h1> This is rendered by app.js </h1>
        { this.props.display === "start" ? <StartScreenConnector /> : null }
        { this.props.display === "game" ? <GameConnector /> : null }
      </div>
    )
  }
}

export default App
