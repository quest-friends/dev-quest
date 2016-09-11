import React from 'react'

class Item extends React.Component {

  itemToRender() {
    const itemType

    switch (itemType){
      case ("coffee"):
        return <span>coffee</span>
      default:
        return ""
      }
    }

  render(){
    return (
      <div className='item'>
        {this.itemToRender()}
      </div>
    )
  }
}

export default Enemy
