
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var gameState = "onSling";
var Dustbin1, dustbin2, dustbin3;
var paper,ground;
var slingShot;
var box1,box2,box3;

function preload()
{
boxImg = loadImage("dustbingreen.png");   
}

function setup() {
	
	createCanvas(800, 700);

	/*dustbin2 = createSprite(680,490,20,100);
	box2= createSprite(600, 530, 13, 75);
	box2.shapeColor = color("black");
	dustbin2.addImage(boxImg);
	dustbin2.scale =0.6;*/
	engine = Engine.create();
	world = engine.world;
	
	paper = new Paper(100, 350,45);
	
	ground = new Ground(400,580,800,20);
	
	box1 = new Box(650, 480, 200,200);	
	

	slingShot = new SlingShot(paper.body,{x:100,y:350});
	
	
	
}


function draw(){
  background("white");
 
  Engine.update(engine);
 
  drawSprites();
  paper.display();
  ground.display();
  console.log("bye")
  slingShot.display();
  box1.display();
  
}
/*function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:360,y:-209});
	   
	 }
}*/
function mouseDragged(){
	
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
	
    slingShot.fly();
}