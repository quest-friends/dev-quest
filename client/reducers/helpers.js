
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

const moveTowardsPlayerThroughRoom = (enemy, state) => {
  var {x, y} = enemy.position
  var enemyDestination = {x, y}
  var tileGrid = state.tileGrid
  var playerX = state.player.position.x
  var playerY = state.player.position.y

  var axesArray = ['horizontal', 'vertical']
  var priorityAxis = axesArray[Math.floor(Math.random() * 2)]

  if (priorityAxis == 'horizontal') {
    if( playerX != x) {
      moveHorizontallyTowardPlayer(enemy, state)
    }else {
      moveVerticallyTowardPlayer(enemy, state)
    }
  }
  else {
    if( playerY != y) {
      moveVerticallyTowardPlayer(enemy, state)
    } else {
      moveHorizontallyTowardPlayer(enemy, state)
    }
  }
}

const moveHorizontallyTowardPlayer = (enemy, state) => {
  var enemyDestination
  if(state.player.position.x > enemy.position.x) {
    enemyDestination = {x:enemy.position.x+1, y:enemy.position.y}
  } else {
    enemyDestination = {x:enemy.position.x-1, y:enemy.position.y}
  }

  var validTiles = [1]
  if(enemy.type == 'promise' || enemy.type == 'var') {
    validTiles = [1,2]
  }

  if (validTiles.indexOf(state.tileGrid[enemyDestination.y][enemyDestination.x]) > -1 && !isEnemyInTile(state.enemies, enemyDestination.y, enemyDestination.x) ){
    moveEnemy(enemy, enemyDestination.y, enemyDestination.x)
  }
}

const moveVerticallyTowardPlayer = (enemy, state) => {
  var enemyDestination
  if(state.player.position.y > enemy.position.y) {
    enemyDestination = {y:enemy.position.y+1, x:enemy.position.x}
  } else {
    enemyDestination = {y:enemy.position.y-1, x:enemy.position.x}
  }

  var validTiles = [1]
  if(enemy.type == 'promise'  || enemy.type == 'var') {
    validTiles = [1,2]
  }

  if (validTiles.indexOf(state.tileGrid[enemyDestination.y][enemyDestination.x]) > -1 && !isEnemyInTile(state.enemies, enemyDestination.y, enemyDestination.x) ){
    moveEnemy(enemy, enemyDestination.y, enemyDestination.x)
  }
}

const moveEnemyInRandomDirection = (enemy, state) => {
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
  newState.items = level.items
  newState.gotchas = level.gotchas
  newState.isExitOpen = false
  var messageAboutSprint = `Starting Sprint ${newState.currentLevel}...`
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

  return  (x == playerX+1 && y == playerY ||
           x == playerX-1 && y == playerY ||
           x == playerX && y == playerY-1 ||
           x == playerX && y == playerY+1  )
}

const removeElementFromArray = (array, index) => {
  var startOfArray = array.slice(0,index)
  var endOfArray = array.slice(index+1)
  return startOfArray.concat(endOfArray)
}

const checkIfExitShouldBeOpen = (currentLevel, enemies, itemsList) => {
  var itemTypes = itemsList.map( (item) => { return item.type})

  if (currentLevel == 3 && enemies.length != 0 ) {
    return false
  }
  else if ( itemTypes.indexOf("apiKey") == -1 ) {
    return true
  }
}

module.exports ={
  randomiseObjectPositionToFloorTile,
  moveEnemy,
  moveTowardsPlayerThroughRoom,
  nextLevel,
  isEnemyInTile,
  isPlayerAdjacent,
  removeElementFromArray,
  moveEnemyInRandomDirection,
  checkIfExitShouldBeOpen
}
