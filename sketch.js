var fixedRect, movingRect, object1, object2, object3, object4;

function setup() {
  createCanvas(1200,800);
   fixedRect = createSprite(600, 400, 50, 50);
   fixedRect.shapeColor = "green";
   movingRect = createSprite(400,200,80,30);
   movingRect.shapeColor = "green";
   object1 = createSprite(100, 100, 50, 50);
   object1.shapeColor = "green"; 
   object2 = createSprite(200, 100, 50, 50);
   object2.shapeColor = "green";
   object3 = createSprite(300,100,50,50);
   object3.shapeColor = "green";
   object3.velocityX = 5;
   object4 = createSprite(400,100,50,50);
   object4.shapeColor = "blue";
   object4.velocityX = -5;
}

function draw() {
  background(255,255,255);
movingRect.x = World.mouseX;
movingRect.y = World.mouseY;

if(isTouching(object2, movingRect) === true ){
    movingRect.shapeColor = "red";
    object2.shapeColor = "red";
   }
else {
  movingRect.shapeColor = "green";
  object2.shapeColor = "green";
  }

bounceOff(object3, object4);

  drawSprites();
}
