import React from 'react'

class Tile extends React.Component {

  constructor(props){
    super(props)
  }

  isTileFloor() {
    const tileType = this.props.tileType
    return tileType == 1
  }

  render(){
    return (
      <div className="tile">
        { this.isTileFloor() ? <span><p>.</p></span> : <span><p>#</p></span> }
      </div>
    )
  }
}

export default Tile
