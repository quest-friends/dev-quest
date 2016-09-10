import React from 'react'
import {connect} from 'react-redux'
import Enemy from '../components/enemy'

const mapStateToProps = (state) => {
  return {
    enemies: state.enemies
  }
}

const enemyConnector = connect(mapStateToProps)(Enemy)

export default enemyConnector

// isEnemyPresent() {
//   const {enemies, i, j} = this.props
//   const presentEnemy = enemies.find( (enemy) => {
//     return enemy.position.y==i && enemy.position.x==j
//   })
//   return presentEnemy
// }
