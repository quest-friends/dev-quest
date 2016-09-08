import React from 'react'

class Tile extends React.Component {

  constructor(props){
    super(props)
  }

  tileTypeToRender() {
    const tileType = this.props.tileType
    switch (tileType){
      case (0):
        return <span><p>##</p></span>
      case (1):
        return <span><p>.</p></span>
      case (2):
        return <span><p>*</p></span>
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
