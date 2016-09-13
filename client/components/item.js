import React from 'react'

class Item extends React.Component {

  getPresentItem() {
    const {items, x, y} = this.props
    let presentItem = items.find( (item) => {
      return item.position.y==y && item.position.x==x
    })
    return presentItem
  }

  itemTypeToRender() {
    const itemType = this.getPresentItem().type

    switch (itemType){
      case ("coffee"):
        return <div><img src={"./img/items/coffee.png"} alt="coffee" className="img-item" /></div>
      case ("freshAir"):
        return <span><img src={"./img/items/freshAir.png"} alt="freshAir" className="img-item" /></span>
      case ("battery"):
        return <div><img src={"./img/items/battery.png"} alt="battery" className="img-item" /></div>
      case ("apiKey"):
        return <div><img src={"./img/items/key.png"} alt="ApiKey" className="img-item" /></div>
      default:
        return ""
    }
  }

  render(){
    return (
      <div className='item'>
        {this.getPresentItem() ? this.itemTypeToRender() : null}
      </div>
    )
  }
}

export default Item
