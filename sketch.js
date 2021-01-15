const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var stone;
var tree;
var boyImg;
var launcher;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11;

function preload(){
	boyImg = loadImage("Sprites/boy.png");
}

function setup() {
	createCanvas(1200,600);//1200,500

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(1200,10);
	stone = new Stone(120,418);
	tree = new Tree(900,338);
	launcher = new SlingShot(stone.body, {x:120 , y:418});
	mango1 = new Mango(800,330,50,50);
	mango2 = new Mango(900,200,50,50);
	mango3 = new Mango(1000,330,50,50);
	mango4 = new Mango(960,260,50,50);
	mango5 = new Mango(840,250,50,50);
	mango6 = new Mango(890,310,50,50);
	mango7 = new Mango(820,180,50,50);
	mango8 = new Mango(1100,280,50,50);
	mango9 = new Mango(1050,230,50,50);
	mango10 = new Mango(970,170,50,50);
	mango11 = new Mango(760,260,50,50);

	Engine.run(engine); 
}

function draw() {
  //rectMode(CENTER);
  background("lightgray");
  image(boyImg, 100, 350, 160, 260);
  ground.display();
  tree.display();
  launcher.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  stone.display();
  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
  detectCollision(stone, mango9);
  detectCollision(stone, mango10);
  detectCollision(stone, mango11);
  
  drawSprites();
}
function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:120, y:418})
		launcher.attach(stone.body);
	}
}
function detectCollision(lstone, lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if (distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function mouseDragged() { 
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
} 
function mouseReleased() { 
	launcher.fly();
}


