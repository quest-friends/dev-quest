import React from 'react'

class Tile extends React.Component {

  constructor(props){
    super(props)
  }

  tileTypeToRender() {
    const tileType = this.props.tileType
    switch (tileType){
      case (0):
        return <span>#</span>
      case (1):
        return <span>.</span>
      case (2):
        return <span>"*"</span>
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
