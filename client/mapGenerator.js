const features = [ 'room', 'corridor' ]

var tileArray, possibleStartPoints, nextStartPoint
mapGenerator()

function mapGenerator( levelNumber ) {
      nextStartPoint = {x: 10, y: 10}
      tileArray = [ [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ]

  generateFeature(nextStartPoint.y, nextStartPoint.x)
  generateFeature(nextStartPoint.y, nextStartPoint.x)



  console.log("tile array", tileArray);
}


function generateFeature ( y, x ) {
  console.log('generating a new feature at ', x, " ", y, "!");
  var type = features[Math.floor(Math.random() * features.length)]
  if(checkIfFits(type, x, y)){
    switch(type){

      case 'room':
        for(var i = 0; i < 3; i++){
          for(var j = 0; j < 3; j++){
            tileArray[y + i][x + j] = 1
          }
        }
        possibleStartPoints = [ {y: y+1, x: x+3},
                                {y: y+1, x: x-1},
                                {y: y-1, x: x+1},
                                {y: y+3, x: x+1} ]
        break

      case 'corridor':
          for(var j = 0; j < 6; j++){
            tileArray[y][x + j] = 1
          }
        possibleStartPoints = [ {y: y, x: x+5}]
        break

        default:
          console.log('something went wrong!');

    }
      nextStartPoint = possibleStartPoints[ Math.floor(Math.random() * possibleStartPoints.length) ]
  }
}

function checkIfFits ( feature, x, y) {
  switch(feature) {
    case 'room':
      for(var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
          if (!(tileArray[y + i][x + j] == 0)){
            return false
          }
        }
      }
      return true
      break

    case 'corridor':
      for(var i = 0; i < 1; i++){
        for(var j = 0; j < 6; j++){
          if (!(tileArray[y+ i][x + j] == 0)){
            return false
          }
        }
      }
      return true
      break


    default:
    console.log('unrecognised feature');
  }
}

module.exports = { mapGenerator }
