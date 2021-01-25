export default class Stage {

    constructor(gridSize, tileCount){
        this.gridSize = gridSize;
        this.tileCount = tileCount;
        this.width = gridSize * tileCount;
        this.height = gridSize * tileCount;
    }

    draw(context){
        context.fillStyle = "black";
        context.canvas.width = this.width;
        context.canvas.height = this.height;
        context.fillRect(0, 0, this.width, this.height);
    }

}