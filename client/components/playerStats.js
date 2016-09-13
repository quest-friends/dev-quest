import React from 'react'

class PlayerStats extends React.Component {

  render(){
    return (
      <div className='ui-playerStats'>
        <h3>Coder Stats:</h3>
        <h4>- Main Language: {this.props.type}</h4>
        <h4>- Wellbeing: {this.props.health}</h4>
        <h4>- Exp: {this.props.xp}</h4>
        <h4>- Attack: {this.props.attack}</h4>
        <h4>- Defence: {this.props.defence}</h4>
        <h4>- Laptop Charge: {this.props.charge}%</h4>
      </div>
    )
  }
}

export default PlayerStats
