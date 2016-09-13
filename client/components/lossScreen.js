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
          <p>It seems your journey as a Web Developer has come to an end</p>
          <h2>Give it another go?</h2>
        </div>
        <button className="start-game-button" onClick={this.reloadGame}>Refactor Your Code</button>
      </div>
    )
  }
}

export default LossScreen
