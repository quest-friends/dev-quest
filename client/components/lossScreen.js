import React from 'react'

class LossScreen extends React.Component {

  reloadGame () {
    location.reload()
  }

  textToRender() {
    const health = this.props.health
    const charge = this.props.charge
    let lossMessage
    if (health <= 0) {
      lossMessage = "You neglected your health & well-being - developers need to take care of themselves as well as writing sweet code"
    }
    else {
      lossMessage = "You ran out of charge - writing code can really run your batteries down"
    }
    return lossMessage
  }

  render(){
    return (
      <div className="display-screen">
        <div className="display-screen-info">
          <h2>You lost:</h2>
          <h2>{this.textToRender()}</h2>
          <h2>Maybe time to go back to code camp?</h2>
        </div>
        <button className="start-game-button" onClick={this.reloadGame}>Start new game</button>
      </div>
    )
  }
}

export default LossScreen
