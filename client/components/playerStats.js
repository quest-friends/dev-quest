import React from 'react'

class PlayerStats extends React.Component {

  render(){
    return (
      <div className='ui-playerStats'>
        <h3>This is rendered by playerStats</h3>
        <p>Coder Wellbeing: {this.props.playerHealth}</p>
        <p>Coder Exp: {this.props.playerXP}</p>
        <p>Coder Attack: {this.props.attack}</p>
        <p>Coder Defence: {this.props.defence}</p>
        <p>Laptop Charge: {this.props.charge}</p>
      </div>
    )
  }
}

export default PlayerStats
