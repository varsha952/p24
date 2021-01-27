
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var b
 var g
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
     

	engine = Engine.create();
	world = engine.world;
	 b = new Ball(200 , 400)
	 g = Bodies.rectangle(400 , 680 , 800 , 20 , {isStatic : true})
	 
	box1 = Bodies.rectangle(400 , 650 , 200 , 10 ,{ isStatic : true})
	World.add(world , box1)
   box2 = Bodies.rectangle(305 , 610 , 10 , 200 , {isStatic : true})
   World.add(world , box2)
 
	
	box3 = Bodies.rectangle(495 , 610 , 10 , 200 , {isStatic : true})
	World.add(world , box3)
     World.add(world , g)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  b.display()
  drawSprites();
  rect(g.position.x , g.position.y , 800 , 20)
  fill("red")
  rect(box1.position.x , box1.position.y,200,10)
  rect(box2.position.x , box2.position.y,10,100)
  rect(box3.position.x , box3.position.y,10,100)



}


function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	 
	 Matter.Body.applyForce(b.body , b.body.position , {x : 85 , y : -85})
	 }
   }


