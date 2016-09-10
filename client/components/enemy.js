import React from 'react'

class Enemy extends React.Component {

  getPresentEnemy() {
    const {enemies, x, y} = this.props
    const presentEnemy = enemies.find( (enemy) => {
      return enemy.position.y==y && enemy.position.x==x
    })
    return presentEnemy
  }

  enemyTypeToRender() {
    const enemyType = this.getPresentEnemy().type

    switch (enemyType){
      case ("ie6"):
        return <span><p>ie6</p></span>
      case ("chrome"):
        return <span><p>chrome</p></span>
      case ("firefox"):
        return <span><p>firefox</p></span>
      case ("opera"):
        return <span><p>opera</p></span>
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
