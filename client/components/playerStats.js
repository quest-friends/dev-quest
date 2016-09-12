import React from 'react'

class PlayerStats extends React.Component {

  render(){
    return (
      <div className='ui-playerStats'>
        <h3>This is rendered by playerStats</h3>
        <p>Player Health: {this.props.playerHealth}</p>
        <p>Remaining charge: {this.props.playerCharge}</p>
        <p>Player Exp: {this.props.playerXP}</p>
      </div>
    )
  }
}

export default PlayerStats
