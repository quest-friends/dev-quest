import React from 'react'

class Enemy extends React.Component {

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
        return <div><img src={"./img/googleChrome.svg.png"} alt="googlechrome" className="img-enemy" /></div>
        //return <span>chrome</span>
      case ("firefox"):
        return <div><img src={"./img/firefox.png"} alt="firefox" className="img-enemy" /></div>
        //return <span>firefox</span>
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
