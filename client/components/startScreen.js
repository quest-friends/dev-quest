import React from 'react'

class StartScreen extends React.Component {

  render(){
    return (
      <div>
        <h1> This is rendered by the start screen!</h1>
        <button className="startGame" onClick={this.props.startGame}>Start the gaaaaaame! </button>
      </div>
    )
  }
}

export default StartScreen
