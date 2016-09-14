import React from 'react'

class LossScreen extends React.Component {

  reloadGame () {
    location.reload()
  }

  render(){
    return (
      <div className="display-screen">
        <div className="display-screen-info">
          <h1>Oh no, you lost!</h1>
          <p>It seems you either ran out of wellbeing or your laptop went dead!</p>
        </div>
        <h2>Give it another go?</h2>
        <button className="start-game-button" onClick={this.reloadGame}>Refactor Your Code</button>
      </div>
    )
  }
}

export default LossScreen
