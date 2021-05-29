//Constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//Variables
var engine, world;

var player, playerImage, tree;
var ground;
var stoneObj, launcher;
var launchForce = 100;
var mango1, mango2, mango3, mango4, mango5, mango6;
var mango7, mango8, mango9, mango10, mango11, mango12; 

function preload(){
	//Preload the images here
      playerImage = loadImage("Images/boy.png");
	  
	
}

function setup() {
	var canvas = createCanvas(1200, 700);
	//Create the Sprites here
    player = createSprite(290, 470, 80, 200);
	player.addImage(playerImage);
	player.scale = 0.1;

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(600, 680, 1200, 20)
	
	tree = new Tree(600, 700);

	mango1 = new Mango(700, 290, 40, 40);
	mango2 = new Mango(830, 180, 50, 50);
	mango3 = new Mango(1000, 210, 40, 40);
	mango4 = new Mango(900, 200, 60, 60);
	mango5 = new Mango(950, 90, 50, 50);
	mango6 = new Mango(930, 280, 60, 60);
	mango7 = new Mango(780, 120, 50, 50);
	mango8 = new Mango(1100, 250, 70, 70);
	mango9 = new Mango(1050, 160, 40, 40);
	mango10 = new Mango(760, 280, 70, 70);
	mango11 = new Mango(1010, 100, 50, 50);
	mango12 = new Mango(850, 80, 60, 60);
	

	
	stoneObj = new Launcherobject(40, 40);
	launcher = new Launcher(stoneObj.body, {x: 235, y:420});
	

	
  
}


function draw() {
  rectMode(CENTER);
  Engine.run(engine);
  background(230, 230, 230);

  ground.display();
  //ground2.display();
  //ground3.display();
  //ground4.display();
  
  launcher.display();

  tree.display();

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
  mango12.display();
  stoneObj.display();

  console.log()
  
  drawSprites();
  //text
  textSize(20);
  fill("black"); 
  text("Press space to get a second chance to play! ", 40, 30);
 
}

//Functions

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body, {x: mouseX, y: mouseY});
}


function mouseReleased(){
	launcher.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stoneObj.body, {x: 235, y: 420});
		launcher.attach(stoneObj.body);

	}
}


