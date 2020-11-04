var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);

  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = rgb(80,80,80);

  bullet = createSprite(50, 200, 30, 20);
  bullet.shapeColor ="white";
  

  speed = random(223,321);
  weight = random(30,52);

  bullet.velocityX = speed;

}
function draw() {
  background(0,0,0);  
  drawSprites();
  
   if (bullet.isTouching(wall)) {
  //  if(hasCollide(bullet, wall)) {
    bullet.velocityX = 0;
    var def= (0.5*weight*speed*speed)/(thickness*thickness*thickness);

    if(def > 10){
      wall.shapeColor = "red";
    }else{
      wall.shapeColor = "green";
  }
}
}

function hasCollide(bullet, wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;

  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
  
  return false;
}