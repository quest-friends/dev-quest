import React from 'react'

class Player extends React.Component {

  constructor(props){
    super(props)


  }

  render(){
    return (
      <div>
        {this.props.player.health}
      </div>
    )
  }
}

export default Player
