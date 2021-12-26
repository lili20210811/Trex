var bg;
var food;
var obstacle;
var cat;


function preload(){
  background = loadImage("bg.png");
  food = loadImage("comida.png");
  obstacle = loadImage("estambre.png");
  cat = loadImage("gato.gif")

}

function setup() {
 createCanvas(800,800);
 bg=createSprite(0,100);
 bg.addImage(background)
 bg.velocityX=1;
 cat=createSprite(100,100);
 
}

function draw() {


  drawSprites();
}