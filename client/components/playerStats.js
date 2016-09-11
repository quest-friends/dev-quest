import React from 'react'

class PlayerStats extends React.Component {

  constructor(props){
    super(props)


  }

  render(){
    return (
      <div className='ui-playerStats'>
        <h3>This is rendered by playerStats</h3>
        <p>Player Health: {this.props.playerHealth}</p>
        <p>Player Exp: {this.props.playerXP}</p>
      </div>
    )
  }
}

export default PlayerStats
