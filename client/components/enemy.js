import React from 'react'

class Enemy extends React.Component {

  constructor(props){
    super(props)


  }

  render(){
      console.log("here is the enemy", this.props);
    return (
      <div className='enemy'>
        <span><p>$$</p></span>
      </div>
    )
  }
}

export default Enemy
