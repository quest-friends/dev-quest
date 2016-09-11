import React from 'react'

class ConsoleLog extends React.Component {

  render(){
    return (
      <div className='ui-console'>
        <div className='ui-heading'>
          <h2>Dev Quest 2.0</h2>
        </div>
        <div className='ui-terminalLog'>
          <p>This is rendered by consoleLog</p>
        </div>
      </div>
    )
  }
}

export default ConsoleLog
