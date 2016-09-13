import React from 'react'

class Tile extends React.Component {

  constructor(props){
    super(props)
  }

  tileTypeToRender() {
    const tileType = this.props.tileType
    switch (tileType){
      case (0):
        return <div><img src={"./img/background/RockTilesBackGround.png"} alt="googlechrome" className="img-enemy" /></div>
      case (1):
        return <div><img src={"./img/background/RockTile.png"} alt="googlechrome" className="img-enemy" /></div>
      case (2):
        return <div><img src={"./img/background/RockTile.png"} alt="googlechrome" className="img-enemy" /></div>
      case (3):
        return <span>X</span>
      default:
        return ""
    }
  }

  render(){
    return (
      <div className="tile">
        { this.tileTypeToRender() }
      </div>
    )
  }
}

export default Tile
