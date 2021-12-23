
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var groundObj
var leftSide
var rightSide
function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options = {
isStatic: false,
restitution:0.3,
friction:0,
density:1.2



}
ball = Bodies.circle(200,200,15,ball_options)
World.add(world, ball)
groundObj=new ground(width/2,760,width,20);
leftSide = new ground(800,700,20,120)
rightSide = new ground(900,700,20,120)



Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,15)
  groundObj.display()
  rightSide.display(
	  leftSide.display()
  )
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:5,y:-5})
	}
}

