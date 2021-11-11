var box;
function setup() {
  createCanvas(400,400);
box=createSprite(200,200,15,15)
}


function draw() 
{
  background("red");
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x=box.position.x+4;
    background("purple")
  }
  if(keyIsDown(LEFT_ARROW)){
    box.position.x=box.position.x-4;}
  if(keyIsDown(UP_ARROW)){
      box.position.y=box.position.y+4;}
  if(keyIsDown(DOWN_ARROW)){
        box.position.y=box.position.y-4;}  
drawSprites();
}




