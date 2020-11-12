
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObject,paperObject,groundObject
var engine,world;
function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;
	dustbinObject=new dustbin(1200,650);
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);

	Engine.run(engine);
	//Create the Bodies Here. 
}


function draw() {
  background(0);
  dustbinObject.display();
  paperObject.display();
  groundObject.display();
 }

function keyPressed(){
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:35,y:-35});
}

}

