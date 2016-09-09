import React from 'react'
import GameConnector from '../connectors/gameConnector'
import StartScreenConnector from '../connectors/startScreenConnector'
import WinScreen from './winScreen'
import LossScreen from './lossScreen'

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
        { this.props.display === "win" ? <WinScreen /> : null }
        { this.props.display === "loss" ? <LossScreen /> : null }
      </div>
    )
  }
}

export default App
