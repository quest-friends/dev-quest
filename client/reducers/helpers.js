
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

module.exports ={
  randomiseEnemyPosition
}
