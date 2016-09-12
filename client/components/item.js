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
        return <span>coffee</span>
      case ("codeRed"):
        return <span>codeRed</span>
      case ("battery"):
        return <span>battery</span>
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
