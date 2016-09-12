import React from 'react'

class LossScreen extends React.Component {

  render(){
    return (
      <div className="displayScreen">
        <h1>Oh no, you lost!</h1>
        <br /><br /><br />
        <h4>It seems your journey as a Web Developer has come to an end</h4>
        <br />
        <h2>Give it another go?</h2>
        <button className="startGameButton" onclick={this.props.restartGame}>Refactor Your Code</button>
      </div>
    )
  }
}

export default LossScreen
