import React from 'react'

class Enemy extends React.Component {

  constructor(props){
    super(props)
  }
  isPlayerAdjacent() {
    const {x, y, playerX, playerY, playerHealth} = this.props
    if (  x == playerX+1 && y == playerY ||
              x == playerX-1 && y == playerY ||
              x == playerX && y == playerY-1 ||
              x == playerX && y == playerY+1    ){
      }
  }

  getPresentEnemy() {
    const {enemies, x, y} = this.props
    let presentEnemy = enemies.find( (enemy) => {
      return enemy.position.y==y && enemy.position.x==x
    })
     if (!presentEnemy) {
       presentEnemy = {type: "dead"}
     }
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
