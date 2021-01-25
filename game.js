import Stage from './class/stage.js'
import Apple from './class/apple.js'
import Snake from './class/snake.js'

let cxt, stage, snake, apple;

function init(){

    cxt = document.getElementById("game").getContext("2d");

    stage = new Stage(20, 30);
    snake = new Snake();
    apple = new Apple();

    snake.init(stage.tileCount);
    apple.init(stage.tileCount);

    document.addEventListener("keydown", function(e){
        snake.control(e);
    }, false);
    
    setInterval(update, 55);

}

function update(){    

    snake.update(stage.tileCount);

    if(apple.isEaten(snake.position)){
        snake.grow();
        apple.respawn(stage.tileCount, snake.body);
    }

    if(snake.isDead){
        reset();
    }

    draw();

}

function draw() {
    stage.draw(cxt)
    snake.draw(cxt, stage.gridSize);
    apple.draw(cxt, stage.gridSize);
}

function reset(){
    snake.init(stage.tileCount);
    apple.init(stage.tileCount);
}

window.onload = function() {
    init();
}