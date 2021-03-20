
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

var ground;
var wall1;
var wall2;
var wall3;
var paper;

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

    ground = new Ground(600,height,1200,20);
	
	wall1 = new Dustbin(1000,height-22,200,20);
	wall2 = new Dustbin(900,height-70,20,100);
	wall3 = new Dustbin(1100,height-70,20,100);
	
	paper= new Paper(100,350,40);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  
 stroke(0)
 textSize(40)
 fill("red")
 text("Press Up Arrow To launch",380,40) 
  
  
  
  ground.display();
  paper.display();
  wall1.display();
  wall2.display();
  wall3.display();
 
 
 
}

function keyPressed() {

 if(keyCode === UP_ARROW) {

Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

  }
}

