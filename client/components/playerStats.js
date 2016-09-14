import React from 'react'

class PlayerStats extends React.Component {

  render(){
    return (
      <div className='ui-playerStats'>
        <div className="ui-heading">
          <h3>Coder Stats:</h3>
        </div>
        <div className="ui-statsLog">
          <p>> Main Language: <span>{this.props.type}</span></p>
          <p>> Wellbeing: <span>{this.props.health}</span></p>
          <p>> Laptop Charge: <span>{this.props.charge}%</span></p>
          <p>> Attack: <span>{this.props.attack}</span></p>
          <p>> Exp: <span>{this.props.xp}</span></p>
        </div>
      </div>
    )
  }
}

export default PlayerStats
