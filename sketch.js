
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5
var roof
var rope1




function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1=new Bob(200,500,90)

  roof=new Roof(180,50,500,30)
  
  bob2=new Bob(290,500,90)

  bob3=new Bob(380,500,90)

  bob4=new Bob(470,500,90)

  bob5=new Bob(560,500,90)

  rope1=new rope(bob1.body,roof.body,-bobDiameter*2,0)


	

  
}


function draw() {
  rectMode(CENTER);
  
  Engine.update(engine);

  background(255);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
 rope1.display();
 
 
  drawSprites();
 
}



