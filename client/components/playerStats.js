import React from 'react'

class PlayerStats extends React.Component {

  render(){
    const attackedClass = this.props.hasBeenAttacked ? 'attacked' : ''
    return (
      <div className='ui-playerStats'>
        <div className="ui-heading">
          <h3>Coder Stats:</h3>
        </div>
        <div className="ui-statsLog">

          <div className="player-stats-left-align">
            <p>Main Language:</p>
            <p>Wellbeing:</p>
            <p>Laptop Charge:</p>
            <p>Attack:</p>
            <p>Exp:</p>
          </div>
          <div>
            <p>{this.props.type}</p>
            <p>{this.props.health}</p>
            <p>{this.props.charge}%</p>
            <p>{this.props.attack}</p>
            <p>{this.props.xp}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default PlayerStats
