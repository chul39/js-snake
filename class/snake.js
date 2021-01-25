export default class Snake {

    constructor(){
        this.position = {x: 0, y: 0};
        this.velocity = {x: 0, y: 0};
        this.body = [];
        this.bodyCount = 1;
        this.isDead = false;
    }

    init(tileCount){
        this.position.x = Math.floor(tileCount/2);
        this.position.y = Math.floor(tileCount/2);
        this.velocity.x = 0;
        this.velocity.y = 0;
        this.trail = [];
        this.bodyCount = 1;
        this.isDead = false;
    }

    update(tileCount){

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        
        if(this.position.x < 0) this.position.x = tileCount -1; 
        if(this.position.x > tileCount - 1) this.position.x = 0;
        if(this.position.y < 0) this.position.y = tileCount -1;
        if(this.position.y > tileCount - 1) this.position.y = 0;

        for(let i = 0; i < this.body.length; i++){
            if(this.body.length > 1 && this.body[i].x == this.position.x && this.body[i].y == this.position.y){
                this.isDead = true;
            }
        }

        this.body.push({
            x: this.position.x,
            y: this.position.y
        });

        while(this.body.length > this.bodyCount) {
            this.body.shift();
        }

    }

    draw(context, gridSize){
        context.fillStyle = "white";
        for(let i = 0; i < this.body.length; i++){
            context.fillRect(this.body[i].x * gridSize, this.body[i].y  *  gridSize, gridSize - 2, gridSize - 2);
        }
    }

    grow(){
        this.bodyCount++;
    }

    control(e){
        switch(e.keyCode){
            case 37:
                if(this.velocity.x != 1){
                    this.velocity.x = -1;
                    this.velocity.y = 0;
                }
                break;

            case 38:
                if(this.velocity.y != 1){
                    this.velocity.x = 0;
                    this.velocity.y = -1;
                }
                break;

            case 39:
                if(this.velocity.x != -1){
                    this.velocity.x = 1;
                    this.velocity.y = 0;
                }
                break;

            case 40:
                if(this.velocity.y != -1){
                    this.velocity.x = 0;
                    this.velocity.y = 1;
                }
                break;
        }
    }

}