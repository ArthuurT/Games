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

  var createRect = function(posx,posy,color){
      var rect = new Konva.Rect({
        x: cellWidth * posx + (strokeWidth / 2),
        y: cellHeight * posy + (strokeWidth / 2),
        width: cellWidth,
        height: cellHeight,
        fill: color,
        stroke: 'black',
        strokeWidth : strokeWidth
      })
      layer.add(rect)
      return rect;
  }

  function isValidCell(posx,posy){
    var stroke = parseInt(strokeWidth)
    return posx > 0 && posx + stroke < width && posy > 0 && posy + stroke < height;
  }

  function Snake(posx,posy){
    this.speedx = 0;
    this.speedy = 0;
    this.head = createRect(posx,posy,'green');
    this.body = [createRect(posx,posy+1,'white'),createRect(posx,posy+2,'white'),createRect(posx,posy+3,'white'),createRect(posx,posy+4,'white')];
    this.mooveTop = function(){
      if(isValidCell(this.head.attrs.x,this.head.attrs.y - cellHeight)){
        if(this.body.length != 0){
          this.mooveBody()
        }
        this.head.move({x : 0, y: -cellHeight})
        if(this.isDead()){
          this.clearBody();
        }
      }
    };
    this.mooveBottom = function(){
      if(isValidCell(this.head.attrs.x,this.head.attrs.y + cellHeight)){
        if(this.body.length != 0){
          this.mooveBody()
        }
        this.head.move({x : 0, y: +cellHeight})
        if(this.isDead()){
          this.clearBody();
        }
      }
    };
    this.mooveLeft = function(){
      if(isValidCell(this.head.attrs.x - cellWidth,this.head.attrs.y)){
        if(this.body.length != 0){
          this.mooveBody()
        }
        this.head.move({x : -cellWidth, y: 0})
        if(this.isDead()){
          this.clearBody();
        }
      }
    };
    this.mooveRight = function(){
      if(isValidCell(this.head.attrs.x + cellWidth,this.head.attrs.y)){
        if(this.body.length != 0){
          this.mooveBody()
        }
        this.head.move({x : +cellWidth, y: 0})
        if(this.isDead()){
          this.clearBody();
        }
      }
    };
    this.mooveBody = function(){
      for(var i = this.body.length - 1; i > 0; i--){
        this.body[i].move({x : this.body[i-1].attrs.x - this.body[i].attrs.x  , y: this.body[i-1].attrs.y - this.body[i].attrs.y})
      }
      this.body[0].move({x : this.head.attrs.x - this.body[0].attrs.x  , y: this.head.attrs.y - this.body[0].attrs.y})
    }
    this.isDead = function(){
      var dead = false
      this.body.forEach(position => {
        if(this.head.attrs.x === position.attrs.x && this.head.attrs.y === position.attrs.y){
          dead = true
        }
      })
      return dead
    }
    this.clearBody = function(){
      this.body.forEach(position => {
        position.destroy();
      });
      this.body = [];
    }
  }

  var snake = new Snake(3,3);
  stage.add(layer);

  document.onkeydown = function(e) {
    switch(e.which) {
        case 37: // left
        snake.mooveLeft();
        layer.batchDraw()
        break;

        case 38: // up
        snake.mooveTop();
        layer.batchDraw()
        break;

        case 39: // right
        snake.mooveRight();
        layer.batchDraw()
        break;

        case 40: // down
        snake.mooveBottom();
        layer.batchDraw()
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  };

  /*  
  
  setInterval(function(){
      snake.print();
      snake.mooveTop();
  },2000) 
    
  */
}
