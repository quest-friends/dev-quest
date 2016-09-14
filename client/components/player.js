import React from 'react'

class Player extends React.Component {

  playerImageToRender() {
    const playerClass = this.props.type
    switch (this.props.type)
      case ("JavaScript"):
        return <img src="./img/player/player.png" alt="player" className="img-player" />
      case ("Ruby"):
      return <img src="./img/player/ruby.png" alt="player" className="img-player" />
      case ("Python"):
      return <img src="./img/player/python.png" alt="player" className="img-player" />
      default:
        return ""
  }

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
          {this.}
        </span>
      </div>
    )
  }
}

export default Player
