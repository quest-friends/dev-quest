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
        return <span>ie6</span>
      case ("chrome"):
        return <span>chrome</span>
      case ("firefox"):
        return <span>firefox</span>
      case ("opera"):
        return <span>opera</span>
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
