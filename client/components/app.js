import React from 'react'
import GameConnector from '../connectors/gameConnector'
import StartScreenConnector from '../connectors/startScreenConnector'
import WinScreen from './winScreen'
import LossScreen from './lossScreen'

// dumb
class App extends React.Component {

  render () {
    const display = this.props.display
    return (
      <div>
        {display === 'start' ? <StartScreenConnector /> : null}
        {display === 'game' ? <GameConnector /> : null}
        {display === 'win' ? <WinScreen /> : null}
        {display === 'loss' ? <LossScreen /> : null}
      </div>
    )
  }
}

export default App
