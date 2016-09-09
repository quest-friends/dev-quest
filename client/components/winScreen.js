import React from 'react'

class WinScreen extends React.Component {

  render(){
    return (
      <div>
        <h1> This is rendered by the win screen!</h1>
        <button onClick={this.props.startGame}> play again! </button>
      </div>
    )
  }
}

export default WinScreen
