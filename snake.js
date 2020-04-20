class Snake {
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height)
        this.height=height
        this.width=width
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER)
        fill("black");
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
}