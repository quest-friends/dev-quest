import React from 'react'

class WinScreen extends React.Component {

  reloadGame () {
    location.reload()
  }

  render(){
    return (
      <div className="displayScreen">
        <div className="displayScreenIntro">
          <h1>Well done, you have reached coding enlightenment!</h1>
          <h4>It seems your journey as a Web Developer has come to an end</h4>
          <h2>Give it another go?</h2>
        </div>
        <button className="startGameButton" onClick={this.reloadGame}>Refactor Your Code</button>
      </div>
    )
  }
}

export default WinScreen
