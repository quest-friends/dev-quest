import React from 'react'

class Item extends React.Component {

  getPresentItem() {
    const {items, x, y} = this.props
    let presentItem = items.find( (item) => {
      return item.position.y==y && item.position.x==x
    })
    if (!presentItem) {
      presentItem = {type: "dead"}
    }
    return presentItem
  }

  itemTypeToRender() {
    const itemType = this.getPresentItem().type

    switch (itemType){
      case ("coffee"):
        return <span>coffee</span>
      case ("codeRed"):
        return <span>CodeRed</span>
      default:
        return ""
    }
  }

  render(){
    return (
      <div className='item'>
        {this.itemTypeToRender()}
      </div>
    )
  }
}

export default Item
