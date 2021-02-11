const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var SuperMan;
var engine, world;
var background;
var background;
var Matter;



function preload(){
  superimage = loadImage("SuperMan .jpg");
background1 = loadImage("backdrop.jpg");
}

function setup(){
  var canvas = createCanvas(1200,400);
  
    engine = Engine.create();
    world = engine.world;

    SuperMan = Bodies.rectangle(200,200,50,50);
    World.add(world,SuperMan)
console.log(SuperMan)
}

function draw(){
  background(background1);
  var pos = SuperMan.position
  Engine.update(engine);
  imageMode(CENTER)
  image(superimage,pos.x,pos.y,50,50)
  drawSprites();
}


