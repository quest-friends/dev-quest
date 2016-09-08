import React from 'react'

class StartScreen extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <h1> This is rendered by the start screen!</h1>
        <button onClick={this.props.startGame}>Start the gaaaaaame! </button>
      </div>
    )
  }
}

export default StartScreen
