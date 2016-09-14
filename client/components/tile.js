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
    var floorClass = (number == 3 ? 'img-background-floor transparent' : 'img-background-floor')
    switch (tileType) {
      case (0):
        return <div><img src={`./img/background/wall${number}.gif`} alt="wall" className="img-background-wall" /></div>
      case (1):
        return <div><img src={`./img/background/floor${number}.png`} alt="floor" className={floorClass} /></div>
      case (2):
        return <div><img src={`./img/background/floor${number}.png`} alt="hall" className={floorClass} /></div>
      case (3):
        return <div><img src={`./img/background/stairs.png`} alt="stairs" className="img-background" /></div>
      case (4):
        return <div><img src={`./img/background/floor${number}.png`} alt="spawn" className={floorClass} /></div>
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
