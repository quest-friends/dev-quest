import React from 'react'

class WinScreen extends React.Component {

  reloadGame () {
    location.reload()
  }

scoreToRender() {
    const {health, charge, experience, attack} = this.props
    let nerdCred = health * charge * experience * attack * Math.random()
    return nerdCred
  }

  render(){
    return (
      <div className="display-screen">
        <div className="display-screen-info">
          <h1>Congratulations - you won!</h1>
          <h2>Now that you have successfully defeated browsers, variables, syntax errors and async functions you can call yourself a web developer for sure</h2>
          <h2>You scored {this.scoreToRender()} nerd cred points</h2>
          <p>Wondering how your score was calculated?</p>
          <p>nerd cred = health * charge * experience * attack * Math.random() * cats</p>
          <h2>Do you want to refactor your code?</h2>
        </div>
        <button className="start-game-button" onClick={this.reloadGame}>Start new game</button>
      </div>
    )
  }
}

export default WinScreen
