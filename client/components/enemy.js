import React from 'react'

class Enemy extends React.Component {

  getPresentEnemy() {
    const {enemies, x, y} = this.props

    let presentEnemy = enemies.find( (enemy) => {
      return enemy.position.y==y && enemy.position.x==x
    })
    return presentEnemy

  }

  enemyTypeToRender() {
    const enemyType = this.getPresentEnemy().type
    switch (enemyType){
      case ("ie6"):
        return <div><img src={"./img/enemies/ie6.gif"} alt="ie6" className="img-enemy" /></div>
      case ("chrome"):
        return <div><img src={"./img/enemies/googleChrome.gif"} alt="googlechrome" className="img-enemy" /></div>
      case ("firefox"):
        return <div><img src={"./img/enemies/firefox.gif"} alt="firefox" className="img-enemy" /></div>
      case ("safari"):
        return <div><img src={"./img/enemies/safari.gif"} alt="safari" className="img-enemy" /></div>
      case ("promise"):
        return <div><img src={"./img/enemies/promise.gif"} alt="promise" className="img-enemy" /></div>
      case ("const"):
        return <div><img src={"./img/enemies/const.gif"} alt="const" className="img-enemy" /></div>
      case ("let"):
        return <div><img src={"./img/enemies/let.gif"} alt="let" className="img-enemy" /></div>
      case ("var"):
        return <div><img src={"./img/enemies/var.gif"} alt="var" className="img-enemy" /></div>
      case ("emeny"):
        return <div><img src={"./img/enemies/typo.gif"} alt="typo" className="img-enemy" /></div>
      case ("comma"):
        return <div><img src={"./img/enemies/comma.gif"} alt="comma" className="img-enemy" /></div>
      case ("bracket"):
        return <div><img src={"./img/enemies/brackets.gif"} alt="brackets" className="img-enemy" /></div>
      case ("async"):
        return <div><img src={"./img/enemies/async.gif"} alt="async" className="img-enemy" /></div>
      default:
        return ""
      }
    }

  render(){
    return (
      <div className='enemy'>
        {this.getPresentEnemy() ? this.enemyTypeToRender() : null}
      </div>
    )
  }
}

export default Enemy
