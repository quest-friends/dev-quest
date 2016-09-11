import React from 'react'

class ConsoleLog extends React.Component {

  constructor(props){
    super(props)


  }

  render(){
    const {loggedMessages} = this.props
    return (
      <div className='ui-consoleLog'>
        <h3>This is rendered by consoleLog</h3>
        {loggedMessages.map( (message) => {
          return <p>{message.content}</p>
          }
        )}
      </div>
    )
  }
}

export default ConsoleLog
