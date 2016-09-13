import React from 'react'

class Gotcha extends React.Component {

  getPresentGotcha() {
    const {gotchas, x, y} = this.props
    let presentGotcha = gotchas.find( (gotcha) => {
      return gotcha.position.y==y && gotcha.position.x==x
    })
    return presentGotcha
  }

  gotchaTypeToRender() {
    const gotchaType = this.getPresentGotcha().type

    if(this.getPresentGotcha().triggered){
      switch (gotchaType){
        case ("rabbithole"):
          return <div><img src={"./img/rabbithole.png"} alt="firefox" className="img-enemy" /></div>
        default:
          return ""
      }
    }

    // else {
      return ""
    // }



  }

  render(){
    return (
      <div className='gotcha'>
        {this.getPresentGotcha() ? this.gotchaTypeToRender() : null}
      </div>
    )
  }
}

export default Gotcha
