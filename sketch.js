
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var hammer
var rubber
var stone
function preload()
{
	
}

function setup() {
	createCanvas(1800, 700);
var ground=createSprite(540,590,1800,250)
ground.shapeColor = "green";

var rubber=createSprite(1000,450,50,50)
rubber.shapeColor="blue"


var hammer=createSprite(540,90,100,50)
hammer.shapeColor = "Orange";

var stone=createSprite(540,250,40,50)
stone.shapeColor="teal"



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("PaleTurquoise");

  drawSprites();
 ground.display()
}



