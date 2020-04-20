const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var world,engine
var snake

function setup() {
createCanvas(600,400);
engine=Engine.create();
world=engine.world;

snake=new Snake(200,100,10,50)

}
function draw(){
background("green");
snake.display();
if(keyCode===97){
  snake.speed=10;
}
}
