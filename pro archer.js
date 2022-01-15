const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var options ={
    isStatic: true
  };
  playerBase = Bodies.rectangle(200,350,180,150,options);
  
  player = Bodies.rectangle(250,playerBase.positiony - 160,50,180,options);
  World.add(world,player)
}

function draw() {
  background(backgroundImg);
image(baseImage,playerBase.position.x,playerBase.position.y,180,150);
image(playerimage,player.position.x,player.position.y,50,180)
  //mostrar la imagen del jugador utilizando la función image()
 image("player.png",50,150,30,30)
+

  //mostrar la imagen de la base del jugador utilizando la función image()
 

  Engine.update(engine);

  // Título
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("TIRO CON ARCO ÉPICO", width / 2, 100);
}
