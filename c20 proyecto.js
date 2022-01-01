var bg;
var sleep;
var brush;
var gym;
var eat;
var drink;

function setup() {
  createCanvas(800,400);
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1;
}
function preload(){
  bg=loadImage("images/iss.png");
  sleep=loadAnimation("images/sleep.png");
  brush=loadAnimation("images/brush.png");
  gym=loadAnimation("images/gym21.png","images/gym22.png");
  eat=loadAnimation("eat1.png","eat2.png");
  drink=loadAnimation("drink1.png","drink2.png");
}
function draw() {
  background(255,255,255);  
  addImage.bg(255,255);
  text("Instrucciones:",100,50);
  drawSprites();
}