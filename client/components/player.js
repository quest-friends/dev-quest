import React from 'react'

class Player extends React.Component {

  componentDidMount() {
    if (this.props.hasBeenAttacked){
      this.props.setPlayerAttackedToFalse()
    }
  }

  render(){
    const attackedClass = this.props.hasBeenAttacked ? 'attacked' : ''
    return (
      <div className='player'>
        <span className={attackedClass}>
          <img src={"./img/player/ruby.gif"} alt="player" className="img-player" />
        </span>
      </div>
    )
  }
}

export default Player
