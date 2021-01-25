export default class Apple {

    constructor(){
        this.position = {x: 0, y: 0}
    }

    init(tileCount){
        let snakeOrigin = [{
            x: Math.floor(tileCount/2), 
            y: Math.floor(tileCount/2)
        }];
        this.respawn(tileCount, snakeOrigin);
    }

    draw(context, gridSize){
        context.fillStyle = "red";
        context.fillRect(this.position.x * gridSize, this.position.y * gridSize, gridSize - 2, gridSize - 2);
    }

    respawn(tileCount, snakeBody){
        this.position = this.getNewPosition(tileCount, snakeBody);
    }

    getNewPosition(tileCount, snakeBody){
        let newPosition = {
            x: Math.floor(Math.random() * tileCount), 
            y: Math.floor(Math.random() * tileCount)
        }
        if(snakeBody.some(body => body.x === newPosition.x && body.y === newPosition.y)){
            return this.getNewPosition(tileCount, snakeBody);
        }else{
            return newPosition;
        }
    }

    isEaten(snakePosition){
        if(this.position.x == snakePosition.x && this.position.y == snakePosition.y){
            return true;
        }
    }
    
}