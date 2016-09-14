import React from 'react'

class PlayerStats extends React.Component {

  render(){
    return (
      <div className='ui-playerStats'>
        <div className="ui-heading">
          <h3>Coder Stats:</h3>
        </div>

        <table className="ui-statsLog">
          <tbody>
            <tr>
              <td>Main Language:</td>
              <td>{this.props.type}</td>
            </tr>
            <tr>
              <td>Wellbeing:</td>
              <td className="attacked">{this.props.health}</td>
            </tr>
            <tr>
              <td>Laptop Charge:</td>
              <td className="attacked">{this.props.charge}%</td>
            </tr>
            <tr>
              <td>Attack:</td>
              <td>{this.props.attack}</td>
            </tr>
            <tr>
              <td>Exp:</td>
              <td>{this.props.xp}</td>
            </tr>
          </tbody>
        </table>

      </div>
    )
  }
}

export default PlayerStats
