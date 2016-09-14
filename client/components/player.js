import React from 'react'

class Player extends React.Component {

  playerImageToRender() {
    const playerClass = this.props.type
    console.log("playerClass is", playerClass);
    console.log("type.ruby: ", playerClass.Ruby);
    switch (playerClass) {
      case ("JavaScript"):
        return <img src="./img/player/player.png" alt="player" className="img-player" />
      case ("Ruby"):
      return <img src="./img/player/ruby.gif" alt="player" className="img-player" />
      case ("Python"):
      return <img src="./img/player/python.gif" alt="player" className="img-player" />
      default:
        return ""
    }
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
          {this.playerImageToRender()}
        </span>
      </div>
    )
  }
}

export default Player
