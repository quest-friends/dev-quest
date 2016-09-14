import React from 'react'

class LossScreen extends React.Component {

  reloadGame () {
    location.reload()
  }

  textToRender() {
    //if health <= 0, render "You neglected your health & well-being - developers need to take care of themselves as well as writing sweet code"
    //if charge <= 0, text is "You ran out of charge - developers need to keep their (literal AND figurative) batteries topped up"
  }

  render(){
    return (
      <div className="display-screen">
        <div className="display-screen-info">
          <h1>Oh no, you lost!</h1>
          <p>It seems your journey as a Web Developer has come to an end</p>
          <h2>Maybe it's time to refactor your code?</h2>
        </div>
        <button className="start-game-button" onClick={this.reloadGame}>`Start new game`</button>
      </div>
    )
  }
}

export default LossScreen
