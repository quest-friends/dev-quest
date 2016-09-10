import React from 'react'

class Enemy extends React.Component {

  enemyTypeToRender() {
    const enemyType = this.props.presentEnemy.type
    switch (enemyType){
      case ("ie6"):
        return <span><p>ie6</p></span>
      case ("chrome"):
        return <span><p>chrome</p></span>
      case ("firefox"):
        return <span><p>firefox</p></span>
      default:
        return ""
      }
    }

  render(){
    return (
      <div className='enemy'>
        {this.enemyTypeToRender()}
      </div>
    )
  }
}

export default Enemy
