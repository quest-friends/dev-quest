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
        return <div><img src={`./img/background/wall${number}.gif`} alt="wall" className="img-background" /></div>
      case (1):
        return <div><img src={`./img/background/floor${number}.png`} alt="floor" className="img-background" /></div>
      case (2):
        return <div><img src={`./img/background/floor${number}.png`} alt="hall" className="img-background" /></div>
      case (3):
        return <div><img src={`./img/background/stairs.png`} alt="stairs" className="img-background" /></div>
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
