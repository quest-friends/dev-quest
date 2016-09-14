import React from 'react'

class PlayerStats extends React.Component {

  render(){
    return (
      <div className='ui-playerStats'>
        <div className="ui-heading">
          <h3>Coder Stats:</h3>
        </div>
        <div className="ui-statsLog">
          <p>- Main Language: {this.props.type}</p>
          <p>- Wellbeing: {this.props.health}</p>
          <p>- Laptop Charge: {this.props.charge}%</p>
          <p>- Attack: {this.props.attack}</p>
          <p>- Exp: {this.props.xp}</p>
        </div>
      </div>
    )
  }
}

export default PlayerStats
