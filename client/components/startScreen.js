import React from 'react'

const players = require('../players/players')

class StartScreen extends React.Component {

  render(){

    return (
      <div className="displayScreen">
        <h1>Dev Quest 2.0</h1>
        <h4>The path to coding mastery is fraught with trials and danger.
          It will take all of your determination, skill, and coffee to achieve greatness.</h4>
        <h2>Are you ready to begin your journey?</h2>


        <button className="startGameButton" onClick={ () => this.props.startGame(players.JavaScript) } >Code in JavaScript</button>
        <button className="startGameButton" onClick={ () => this.props.startGame(players.Ruby) } >Code in Ruby</button>

      </div>
    )
  }
}

export default StartScreen
