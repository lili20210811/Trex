const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;

var arrow;
var trash;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  arrow=createImg("right.png");
  arrow.position(220,30);
  arrow.size(80,80);
  arrow.mouseClicked(hforce);
  trash=createImg("basura.png");
  trash.position(110,200);
  trash.size(200,200);


  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 var ball_options = {
   restitution:0.95
 }

 ball = Bodies.circle(200,100,20,ball_options);
 World.add(world,ball);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(255,200,0);
  ellipse(ball.position.x, ball.position.y, 20);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}

function hforce(){
  Matter.Body.applyForce(ball,
   {x:0,y:0 },{x:0.05,y:0});
}
function vforce(){
  Matter.Body.applyForce(ball,
   {x:0,y:0 },{x:0,y:-0.05});
}