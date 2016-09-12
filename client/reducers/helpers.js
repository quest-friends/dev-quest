
const randomiseEnemyPosition = (tileGrid, enemy) => {
    let yCoord = Math.floor(Math.random() * tileGrid.length)
    let xCoord = Math.floor(Math.random() * tileGrid[0].length)
    if ( tileGrid[yCoord][xCoord] === 1) {
        enemy.position = {x: xCoord, y: yCoord}
    }
    else {
      randomiseEnemyPosition(tileGrid, enemy)
     }
}

const moveEnemy = (enemy, y, x) => {
  enemy.position = {y:y, x:x}
}

const moveTowardsPlayer = (enemy, state) => {
    var {x, y} = enemy.position
    var enemyDestination = {x, y}
    var tileGrid = state.tileGrid
    var playerX = state.player.position.x
    var playerY = state.player.position.y

    switch(true){
      case (playerX < x):
        enemyDestination = {y:y, x:x-1}
        break

      case (playerX > x):
        enemyDestination = {y:y, x:x+1}
        break

      case (playerY < y):
        enemyDestination = {y:y-1, x:x}
        break

      case (playerY > y):
        enemyDestination = {y:y+1, x:x}
        break

      default:
       enemyDestination = {x, y}
    }

    if (tileGrid[enemyDestination.y][enemyDestination.x] == 1 && !isEnemyInTile(state.enemies, enemyDestination.y, enemyDestination.x) ){
      moveEnemy(enemy, enemyDestination.y, enemyDestination.x)
    }
  }

  const nextLevel = (newState, levelList, tileGrids) => {
    newState.currentLevel ++
    if (newState.currentLevel == 5){
      newState.display = "win"
      return newState
    }
    var level = levelList[newState.currentLevel-2]
    newState.tileGrid = tileGrids[Math.floor(Math.random() * tileGrids.length)]
    newState.player.position = level.player.position
    newState.enemies = level.enemies
    newState.enemyCount = level.enemyCount
    newState.enemies.map(function(enemy){
      randomiseEnemyPosition(newState.tileGrid, enemy)
    })
    return newState
  }

  const isEnemyInTile = (enemies, y, x) => {
    return enemies.find(function(enemy){
      return enemy.position.x==x && enemy.position.y==y
    })
  }

  const isPlayerAdjacent = (player, enemy) => {
    var {x, y } = enemy.position
    var playerX = player.position.x
    var playerY = player.position.y
    
    return  (x == playerX+1 && y == playerY || x == playerX-1 && y == playerY || x == playerX && y == playerY-1 || x == playerX && y == playerY+1  )
  }

module.exports ={
  randomiseEnemyPosition,
  moveEnemy,
  moveTowardsPlayer,
  nextLevel,
  isEnemyInTile,
  isPlayerAdjacent
}
