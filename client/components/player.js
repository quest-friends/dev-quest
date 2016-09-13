import React from 'react'

class Player extends React.Component {

  render(){
    return (
      <div className='player'>
        {this.props.hasBeenAttacked ? <span className='attacked'>@</span>: <span>@</span>}
      </div>
    )
  }
}

export default Player
