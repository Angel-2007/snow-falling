const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var bg, bgimg;
var elsa, elsaimg;

function preload(){
bgimg = loadImage("snow1.jpg")
elsaimg = loadImage("elsa.png")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  elsa = createSprite(400, 200, 50, 50);
elsa.addImage(elsaimg)
elsa.scale = 0.6
}

function draw() {
  background(bgimg);  
  drawSprites();
}