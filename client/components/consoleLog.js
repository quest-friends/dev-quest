import React from 'react'

const render = (props) => {
  const {loggedMessages} = props
  const displayedMessages = loggedMessages.slice(-6)
  return (
    <div className='ui-console'>
      <div className='ui-heading'>
        <h2>Dev Quest 2.0</h2>
      </div>
      <div className='ui-terminalLog'>
        {displayedMessages.map((message, i) => {
           return <p key={i}>
                    >
                    {message}
                  </p>
         })} >
      </div>
    </div>
  )
}

export default render
