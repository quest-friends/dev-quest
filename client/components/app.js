import React from 'react'
import GameConnector from '../connectors/gameConnector'
import StartScreenConnector from '../connectors/startScreenConnector'
import LossScreenConnector from '../connectors/lossScreenConnector'
import WinScreen from './winScreen'
import LossScreen from './lossScreen'

class App extends React.Component {

  render(){
    const display = this.props.display
    return (
      <div>
        {display === "start" ? <StartScreenConnector /> : null}
        {display === "game" ? <GameConnector /> : null}
        {display === "win" ? <WinScreen /> : null}
        {display === "loss" ? <LossScreenConnector /> : null}
      </div>
    )
  }
}

export default App
