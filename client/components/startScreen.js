import React from 'react'

const players = require('../players/players')

class StartScreen extends React.Component {

  render(){

    return (
      <div className="display-screen">
        <div className="display-screen-info">
          <h1>Dev Quest 2.0</h1>
          <p>The path to coding mastery is fraught with trials and danger.
            It will take all of your determination, skill, and coffee to achieve greatness.</p>
          <h2>Are you ready to begin your journey?</h2>
        </div>

        <div className="new-player-class">
          <div className="class-info">
            <button className="start-game-button" onClick={ () => this.props.startGame(players.JavaScript) } >Code in JavaScript</button>
          </div>
        </div>
        <div className="new-player-class">
          <div className="class-info">
            <button className="start-game-button" onClick={ () => this.props.startGame(players.Ruby) } >Code in Ruby</button>
          </div>
        </div>

      </div>
    )
  }
}

export default StartScreen
