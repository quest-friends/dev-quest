import React from 'react'

class ConsoleLog extends React.Component {

  constructor(props){
    super(props)


  }

  render(){
    const {loggedMessages} = this.props
    const displayedMessages = loggedMessages.slice(-3)
    return (
      <div className='ui-consoleLog'>
        <h3>This is rendered by consoleLog</h3>
        {displayedMessages.map( (message) => {
          return <p>{message.content}</p>
          }
        )}
      </div>
    )
  }
}

export default ConsoleLog
