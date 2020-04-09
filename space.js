var Sun,Mercury, Venus,Earth, Mars;

function setup() {
  createCanvas(1200,800);

  Sun = createSprite(50,100,100,100);
  Sun.shapeColor = "orange";
  Mercury= createSprite(200, 100, 80, 80);
  Mercury.shapeColor = "yellow";
  Venus = createSprite(350, 100, 80, 80);
  Venus.shapeColor = "red";
  Earth = createSprite(500, 100, 80, 80);
  Earth.shapeColor = "green";
  Mars = createSprite(650, 100, 80, 80);
  Mars.shapeColor = "red";

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "white";
}

function draw() {
  background(0,0,0);  
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
    /*Sun = ellipse(50,100,100,100);
    Sun.fill(100,100,100);

   Mercury = ellipse(200,100,70,70);

   Venus = ellipse(350,100,70,70);

   Earth = ellipse(500,100,70,70);

   Mars = ellipse(650,100,70,70);*/
   
 if (movingRect.isTouching(Sun)) {
     Sun.shapeColor="blue";
     movingRect.shapeColor="blue";
     
 }
 if (movingRect.isTouching(Mercury)) {
     Mercury.shapeColor="blue";
     movingRect.shapeColor="blue";
     
 }
 if (movingRect.isTouching(Venus)) {
    Venus.shapeColor="blue";
    movingRect.shapeColor="blue";
    
}
 if (movingRect.isTouching(Earth)) {
    Earth.shapeColor="blue";
    movingRect.shapeColor="blue";
    
}
 if (movingRect.isTouching(Mars)) {
    Mars.shapeColor="blue";
    movingRect.shapeColor="blue";
    
} 
drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}