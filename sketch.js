var track,trackImage
var boy,boy_Running
var rightEdge,leftEdge

function preload(){
  //pre-load images
  trackImage = loadImage("path.png")
  boy_Running = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,400);

  //create sprites here

  track = createSprite(200,200,20,400);
  track.addImage(trackImage);

  boy = createSprite(200,300,20,50);
  boy.addAnimation("boyRunning", boy_Running);
  boy.scale = 0.07;

}
function draw() {
  background(0);
  track.velocityY = 4;
  rightEdge = createSprite(10,200,10,4000)
  leftEdge = createSprite(390,200,10,4000)
  boy.collide(leftEdge);
  boy.collide(rightEdge);
  if(track.y > 400){
    track.y = height/2
  }

  if(keyDown(LEFT_ARROW)){
    boy.x = boy.x - 4;
  }

  if(keyDown(RIGHT_ARROW)){
    boy.x = boy.x + 4;
  }

  drawSprites();
}
