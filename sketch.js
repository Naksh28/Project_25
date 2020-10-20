var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	bin = loadImage('dustbingreen.png');

}

function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	paper = new Paper(200, 200, 20);
	 
	box1 = new Box(800, 620, 20, 120);
	box2 = new Box(1000, 620, 20, 120);
	box3 = new Box(900, 650, 200, 20);
	
	dustbin = Bodies.rectangle(900, 620, 200, 100, {isStatic:true});
	World.add(world, dustbin);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("cyan");
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  imageMode(CENTER);
  image(bin, dustbin.position.x, dustbin.position.y, 200, 100);
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body, paper.body.position,{x:70, y:-70});
  }
}