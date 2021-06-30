var bullet,wall,speed,weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,50);
  thickness = random(22,83);
   bullet = createSprite(50, 200, 60, 20);
   bullet.velocityX = speed;
   wall = createSprite(1200,200,thickness,height/2)
   wall.shapeColor = color(80,80,80)
   bullet.shapeColor = "white";
}

function draw() {
  background(0,0,0); 
  
  if(wall.x - bullet.x < (bullet.width + wall.width)/2){
    bullet.velocityX = 0;
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness)

    if(damage>10){
    wall.shapeColor = color(255,0,0)
    }

    
    if(damage<10){
      wall.shapeColor = color(0,255,0)
    }

  }
  drawSprites();
}