import React from 'react'

class Tile extends React.Component {

  constructor(props){
    super(props)
  }

  tileSetToRender() {
    return this.displayTileSet(this.props.currentLevel)
  }

  displayTileSet(number) {
    const tileType = this.props.tileType
    switch (tileType) {
      case (0):
        return <img src={`./img/background/wall${number}.gif`} alt="wall" className="img-background-wall" />
      case (1):
        return <img src={`./img/background/floor${number}.png`} alt="floor" className="img-background-floor" />
      case (2):
        return <img src={`./img/background/floor${number}.png`} alt="hall" className="img-background-floor" />
      case (3):
        return <img src={`./img/background/stairs.png`} alt="stairs" className="img-background" />
      case (4):
        return <img src={`./img/background/floor${number}.png`} alt="spawn" className="img-background-floor" />
      default:
        return ""
    }
  }

  render() {
    return (
      <div className="tile">
        { this.tileSetToRender() }
      </div>
    )
  }
}

export default Tile
