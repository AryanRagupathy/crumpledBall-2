var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var bin1,bin2,bin3
var ball1;
var engine,world
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
    world = engine.world;

	//Create the Bodies Here.
    bin1 = new Bin(675,640,100,80);
    bin2 = new Bin2(630,640,10,80);
    bin3 = new Bin2(720,640,10,80);
    bin4 = new Bin2(675,675,90,10);
	ground = new Ground(400,690,800,20);
	ball1 = new Ball(100,100)

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);	
  rectMode(CENTER);
  background(255);
  
  ball1.display()
  bin1.display();
  bin2.display();
  bin3.display();
  bin4.display();
  
 
  ground.display();
 keyPressed()
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball1.body, ball1.body.position, {x:5,y:-8})
  }
}
	