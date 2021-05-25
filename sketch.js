var fixedRect, movingRect;
var object1;
var object2;
var object3;

function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityX = -3;

  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.velocityX = 3;
  
  object1 = createSprite(100,100,60,50);
  object1.shapeColor = "green";

  object2 = createSprite(300,100,30,60);
  object2.shapeColor = "green";

  object3 = createSprite(200,100,70,80);
  object3.shapeColor = "green";
  
}

function draw() {
  background(0,0,0);
  bounceOff(movingRect,fixedRect); 
  drawSprites();
}

 