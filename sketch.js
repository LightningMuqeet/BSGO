
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
	log1 = new Dustbin(680,580,20,100,180);
	log2 = new Dustbin(553,585,20,100, 180);
	log3 = new Dustbin(611,658,30,100,90);
	paper = new paper(200,200,)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  log1.display();
  log2.display();
  log3.display();
  drawSprites();
 
}

function mouseDragged()
{
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased()
{
    slingshot.fly();
}