import React from 'react'

class LossScreen extends React.Component {

  render(){
    return (
      <div>
        <h1> This is rendered by the loss screen!</h1>
        <button onClick={this.props.startGame}> play again! </button>
      </div>
    )
  }
}

export default LossScreen
