import React from 'react'

class Player extends React.Component {

  render(){
    console.log("inside the render");
    console.log(this.props.hasBeenAttacked);
    return (
      <div className='player'>
        {this.props.hasBeenAttacked ? <span className='attacked'>@</span>: <span>@</span>}
      </div>
    )
  }
}

export default Player
