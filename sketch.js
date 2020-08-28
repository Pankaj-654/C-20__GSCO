
var car;
var wall;
var speed;
var weight;

function setup() {
  createCanvas(1600,400);
  speed  = random(55,90);
  weight = random(400,1500);
  car    = createSprite(50,200,50,50);
  car.shapeColor = color(200,0,50);
  car.velocityX = speed;
  wall   = createSprite(1400,200,60,height/2);
  wall.shapeColor = color(50,50,50);

}


function draw() {
  background(175,200,55);  

    if(wall.x-car.x < (car.width+wall.width)/2)
   {
   car.velocityX = 0;
   }
   
   var deformation = 0.5 * weight * speed * speed/22509;
   if (deformation > 180){
   
    car.shapeColor = color(225,0,0);
   }
   if(deformation<180 && deformation>100)
  {
    car.shapeColor = color(230,230,0);
  }
   
  if(deformation<100)
  {
  car.shapeColor = color(0,225,0);
  }


  drawSprites();
}









                                            
