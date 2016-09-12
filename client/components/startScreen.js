import React from 'react'

class StartScreen extends React.Component {

  render(){
    return (
      <div className="startScreen">
        <h1>Dev Quest 2.0</h1>
        <br /><br /><br />
        <h4>The path to coding mastery is fraught with trials and danger.
          It will take all of your determination, skill, and coffee to achieve greatness.</h4>
        <br />
        <h2>Are you ready to begin your journey?</h2>
        <button className="startGameButton" onClick={this.props.startGame}>Let's Code!</button>
        <br />
      </div>
    )
  }
}

export default StartScreen
