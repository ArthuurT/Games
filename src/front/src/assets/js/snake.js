var strokeWidth = '2';
var gridSize = 10;

function snakeGame(){
    var width = $('#canvas-snake').width()
    var height = $('#canvas-snake').height()
    var cellWidth = width/gridSize - (strokeWidth/gridSize)
    var cellHeight = height/gridSize - (strokeWidth/gridSize)

    var stage = new Konva.Stage({
      container: 'canvas-snake',
      width: width,
      height: height,
    });

    var layer = new Konva.Layer();

    var createRect = function(posx,posy){
        return new Konva.Rect({
          x: cellWidth * posx + (strokeWidth / 2),
          y: cellHeight * posy + (strokeWidth / 2),
          width: cellWidth,
          height: cellHeight,
          fill: 'white',
          stroke: 'black',
          strokeWidth : strokeWidth
        })
    }




    layer.add(createRect(0,0));
    layer.add(createRect(2,0));
    layer.add(createRect(9,0));
    layer.add(createRect(0,9));

    stage.add(layer);
}
