var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1, box2, box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	line1 = createSprite(390, height - 50, 200, 20);
	line1.shapeColor = color("red");
	line2 = createSprite(500, 610, 20, 100);
	line2.shapeColor = color("red");
	line3 = createSprite(300, 610, 20, 100);
	line3.shapeColor = color("red");

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	

	//creating a ground
	ground = Bodies.rectangle(width/2, 626, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);


  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	
	Matter.Body.setStatic(packageBody, false);

  }
}