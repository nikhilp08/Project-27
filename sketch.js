
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(400,200,600,20);

	bobObject1 = new Bob(200,600,100);
	bobObject2 = new Bob(300,600,100);
	bobObject3 = new Bob(400,600,100);
	bobObject4 = new Bob(500,600,100);
	bobObject5 = new Bob(600,600,100);

	rope1 = new Rope(bobObject1.body,roofObject.body,bobDiameter*2,0)
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  background(0);
	
  	roof.display();
	
 	bobObject1.display();
    bobObject2.display();
    bobObject3.display();
	bobObject4.display();
	bobObject5.display();

	rope1.display();
  
  drawSprites();
 
}



