var movingtra,fixtra;

function setup() {
  
  createCanvas(800,400);
movingtra  =createSprite(400, 200, 50, 50);
movingtra.shapeColor="Green";
fixtra=createSprite(300,100,50,50);
fixtra.shapeColor="Green";
}

function draw() {
  background(255,255,255); 
  movingtra.x=World.mouseX;
  movingtra.y=World.mouseY; 
  console.log(movingtra.x-fixtra.x)
  if(movingtra.x-fixtra.x<=movingtra.width/2+fixtra.width/2&&
    fixtra.x-movingtra.x<=movingtra.width/2+fixtra.width/2  ){
    fixtra.shapeColor="Red";  
    movingtra.shapeColor="Red";
  }
  else{
    fixtra.shapeColor="Green"; 
    movingtra.shapeColor="Green"; 
  }
  drawSprites();
}