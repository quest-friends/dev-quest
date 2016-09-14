import React from 'react'

const players = require('../players/players')

class StartScreen extends React.Component {

  render(){

    return (
      <div className="display-screen">
        <div className="display-screen-info">
          <h1>Dev Quest 2.0</h1>
          <h2>The path to coding mastery is fraught with trials and danger.
            It will take all of your determination, skill, and coffee to achieve greatness.</h2>
          <h2>Are you ready to begin your journey as a junior dev?</h2>
        </div>

        <div className="new-player-class">
          <div className="class-info-left"  onClick={ () => this.props.startGame(players.JavaScript) }>
            <div className="class-picture">
              <img src="./img/player/player.gif" alt="JavaScript" className="class-img" />
            </div>
            <div className="class-starting-stats">
              <h3>Beginner Stats</h3>
              <div className="player-stats-left-align">
                <h5>Language:</h5>
                <h5>Health:</h5>
                <h5>Battery:</h5>
                <h5>Strength:</h5>
              </div>
              <div className="player-stats-left-align">
                <h5>{players.JavaScript.type}</h5>
                <h5>{players.JavaScript.health}</h5>
                <h5>{players.JavaScript.charge}%</h5>
                <h5>{players.JavaScript.attack}</h5>
              </div>

            </div>
            <button className="start-game-button" >
                    Code in JavaScript
            </button>
          </div>
        </div>

        <div className="new-player-class">
          <div className="class-info-middle" onClick={ () => this.props.startGame(players.Ruby) }>
            <div className="class-picture">
              <img src="./img/player/ruby.gif" alt="Ruby" className="class-img" />
            </div>
            <div className="class-starting-stats">
              <h3>Beginner Stats</h3>
                <div className="player-stats-left-align">
                  <h5>Language:</h5>
                  <h5>Health:</h5>
                  <h5>Battery:</h5>
                  <h5>Strength:</h5>
                </div>
                <div className="player-stats-left-align">
                  <h5>{players.Ruby.type}</h5>
                  <h5>{players.Ruby.health}</h5>
                  <h5>{players.Ruby.charge}%</h5>
                  <h5>{players.Ruby.attack}</h5>
                </div>
              </div>
            <button className="start-game-button" >
                    Code in Ruby
            </button>
          </div>
        </div>

        <div className="new-player-class">
          <div className="class-info-right" onClick={ () => this.props.startGame(players.Python) }>
            <div className="class-picture">
              <img src="./img/player/python.gif" alt="Python" className="class-img" />
            </div>
            <div className="class-starting-stats">
              <h3>Beginner Stats</h3>
                <div className="player-stats-left-align">
                  <h5>Language:</h5>
                  <h5>Health:</h5>
                  <h5>Battery:</h5>
                  <h5>Strength:</h5>
                </div>
                <div className="player-stats-left-align">
                  <h5>{players.Python.type}</h5>
                  <h5>{players.Python.health}</h5>
                  <h5>{players.Python.charge}%</h5>
                  <h5>{players.Python.attack}</h5>
                </div>
              </div>
            <button className="start-game-button" >
                    Code in Python
            </button>
          </div>
        </div>

        <div className="display-screen-howToPlay">
          <h1 className="no-padding">How To Play</h1>
          <p>navigation, attack, pickUp === arrow keys</p>
          <p>pickUp(batteries) => increases charge</p>
          <p>pickUp(coffee,fresh air) => increases health</p>
        </div>

      </div>
    )
  }
}

export default StartScreen
