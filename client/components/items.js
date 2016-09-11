import React from 'react'

class Item extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className='item'>
        <span>coffee</span>
      </div>
    )
  }
}

export default Item
