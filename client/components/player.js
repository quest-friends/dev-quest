import React from 'react'

class Player extends React.Component {

  componentDidMount() {
    console.log('player was mounted', this.props.player)
    // if (playerTookDamage) this.props.resetAttackedState()
  }


  render(){
    console.log("inside the render");
    console.log(this.props.hasBeenAttacked);

    const attackedClass = this.props.hasBeenAttacked ? 'attacked' : ''

    return (
      <div className='player'>
        <span className={attackedClass}>
          <img src={"./img/player/player.png"} alt="googlechrome" className="img-player" />
        </span> 
      </div>
    )
  }
}

export default Player
