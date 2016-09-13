import React from 'react'

class PlayerStats extends React.Component {

  render(){
    return (
      <div className='ui-playerStats'>
        <h3>Coder Stats:</h3>
        <p>Main Language: {this.props.type}</p>
        <p>Wellbeing: {this.props.health}</p>
        <p>Exp: {this.props.xp}</p>
        <p>Attack: {this.props.attack}</p>
        <p>Defence: {this.props.defence}</p>
        <p>Laptop Charge: {this.props.charge}%</p>
      </div>
    )
  }
}

export default PlayerStats
