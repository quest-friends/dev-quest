import React from 'react'

class Enemy extends React.Component {

  constructor(props){
    super(props)
  }
  isPlayerAdjacent() {
    const {x, y, playerX, playerY} = this.props
    return (  x == playerX+1 && y == playerY ||
              x == playerX-1 && y == playerY ||
              x == playerX && y == playerY-1 ||
              x == playerX && y == playerY+1    )
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
    console.log(this.getPresentEnemy().type, " says the player is nearby! ", this.isPlayerAdjacent());
    return (
      <div className='enemy'>
        {this.enemyTypeToRender()}
      </div>
    )
  }
}

export default Enemy
