import React from 'react'

class ConsoleLog extends React.Component {


  render(){
    const {loggedMessages} = this.props
    const displayedMessages = loggedMessages.slice(-5)
    return (
      <div className='ui-console'>
        <div className='ui-heading'>
          <h3>Dev Quest 2.0</h3>
        </div>
        <div className='ui-terminalLog'>
         {displayedMessages.map( (message, i) => {
            return <p key={i}>
              > {message}
              </p>
            })}
            >
        </div>
      </div>
    )
  }
}

export default ConsoleLog
