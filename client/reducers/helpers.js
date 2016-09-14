
const randomiseObjectPositionToFloorTile = (tileGrid, object) => {
    let yCoord = Math.floor(Math.random() * tileGrid.length)
    let xCoord = Math.floor(Math.random() * tileGrid[0].length)
    if ( tileGrid[yCoord][xCoord] === 1) {
        object.position = {x: xCoord, y: yCoord}
    }
    else {
      randomiseObjectPositionToFloorTile(tileGrid, object)
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

  const moveAroundRandomly = (enemy, state) => {
    var direction = Math.floor(Math.random() * 5)
    var {x, y} = enemy.position
    var enemyDestination = {x, y}
    var tileGrid = state.tileGrid

    switch(direction){
      case (0):
        enemyDestination = {y:y, x:x-1}
        break

      case (1):
        enemyDestination = {y:y, x:x+1}
        break

      case (2):
        enemyDestination = {y:y-1, x:x}
        break

      case (3):
        enemyDestination = {y:y+1, x:x}
        break

      default:
       enemyDestination = {x, y}
    }
    if (tileGrid[enemyDestination.y][enemyDestination.x] == 1 && !isEnemyInTile(state.enemies, enemyDestination.y, enemyDestination.x) ){
      moveEnemy(enemy, enemyDestination.y, enemyDestination.x)
    }
  }
  const movePlayerToSpawnTile = (newState) => {
    newState.tileGrid.map(function(row, i) {
      if (row.indexOf(4) > -1) {
        newState.player.position = {x: row.indexOf(4), y: i}
      }
    })
  }

  const nextLevel = (newState, levelList, tileGrids) => {
    newState.currentLevel ++
    if (newState.currentLevel == 5){
      newState.display = "win"
      return newState
    }
    var level = levelList[newState.currentLevel-1]
    newState.tileGrid = tileGrids[Math.floor(Math.random() * tileGrids.length)]
    movePlayerToSpawnTile(newState)
    newState.enemies = level.enemies
    newState.enemyCount = level.enemyCount
    newState.items = level.items
    newState.gotchas = level.gotchas
    newState.isExitOpen = false
    var messageAboutSprint = `Starting Sprint ${newState.currentLevel}...`
    newState.loggedMessages = []
    newState.loggedMessages = [messageAboutSprint, level.messageOnStart]
    newState.enemies.map(function(enemy){
      randomiseObjectPositionToFloorTile(newState.tileGrid, enemy)
    })
    newState.items.map(function(item){
      randomiseObjectPositionToFloorTile(newState.tileGrid, item)
    })
    newState.gotchas.map(function(gotcha){
      randomiseObjectPositionToFloorTile(newState.tileGrid, gotcha)
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

  const removeElementFromArray = (array, index) => {
    var startOfArray = array.slice(0,index)
    var endOfArray = array.slice(index+1)
    return startOfArray.concat(endOfArray)
  }

  const checkIfExitShouldBeOpen = (currentLevel, enemies, itemsList) => {
    var itemTypeArray = itemsList.map( (item) => { return item.type})
    if ( currentLevel != 3 && itemTypeArray.indexOf("apiKey") == -1 )
    {
      return true
    }
    else if ( currentLevel == 3 && enemies.length == 0 ) {
      return true
    }
    else {
      return false
    }
  }

module.exports ={
  randomiseObjectPositionToFloorTile,
  moveEnemy,
  moveTowardsPlayer,
  nextLevel,
  isEnemyInTile,
  isPlayerAdjacent,
  removeElementFromArray,
  moveAroundRandomly,
  checkIfExitShouldBeOpen
}
