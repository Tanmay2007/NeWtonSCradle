
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=	Matter.Constraint
var ground,chain1;
var bob1,bob2,bob3,bob4,bob5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,50,685,45)
	bob1=new bob(400,550,25)
	bob2=new bob(300,550,25)
	bob3=new bob(200,550,25)
	bob4=new bob(500,550,25)
	bob5=new bob(600,550,25)
	
	chain1=new Chain(ground,bob1,200,10,{x:200,y:50})
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground.display();
  drawSprites();
 
}



