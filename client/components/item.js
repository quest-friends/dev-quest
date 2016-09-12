import React from 'react'

class Item extends React.Component {

  getPresentItem() {
    const {items, x, y} = this.props
    console.log('position', x, y );
    let presentItem = items.find( (item) => {
      return item.position.y==y && item.position.x==x
    })
    return presentItem //always return an item as render of Item only called in tile with Item instatiated
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
        {this.itemTypeToRender()}
      </div>
    )
  }
}

export default Item
