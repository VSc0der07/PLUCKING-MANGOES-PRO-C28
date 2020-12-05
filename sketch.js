const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, stone,ground, launcherObject;
var mango1,mango2,mango3,mango4,mango5;
var boy,boyImg,boyShot;

function preload()
{
	boyImg = loadImage("boy.png");

}

function setup() {
	createCanvas(1350, 600);
background ("tower.png")

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = createSprite(210,560,90,90);
	boy.addImage(boyImg);
	boy.scale = 0.1;
	tree = new Tree(800,410,490,520);
	ground = new Ground(100,600,200000,20);
	mango1 = new Mango(750,300,25);
	mango2 = new Mango(700,350,25);
	mango3 = new Mango(790,360,25);
	mango4 = new Mango(810,260,25);
	mango5 = new Mango(870,350,25);
	stone = new Stone(550,138,15);
	boyShot = new Shot(stone.body,{x:150,y:500});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  Engine.update(engine);

  background("tower.png");
  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  boyShot.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
    drawSprites();
 
}


function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
   boyShot.fly()
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){

	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:150,y:550})
		boyShot.attach(stone.body);
	}
}