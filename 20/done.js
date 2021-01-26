
var car, wall;
var speed, weight;
var deformation;


function setup() {

speed=random(55,90)
weight=random(400,1500)


car=createSprite(200, 300, 50,50)


  wall=createSprite(1000,300,50,400);

  wall.shapeColor=color(80,80,80);
  var canvas = createCanvas(1100,600);
  //createSprite(400, 200, 50, 50);
}

function draw() {

  //wall.display();
  //car.display();


  car.velocityX =speed;

    deformation = 0.5 * weight * speed * speed % 22500


    if(wall.x-car.x < (car.width+wall.width)/2)
   {
     car.velocityX=0;
     var deformation=0.5 * weight * speed* speed/22509;
     if(deformation>180)
     {
         car.shapeColor=color(255,0,0);
     }
 
     if(deformation<180 && deformation>100)
     {
         car.shapeColor=color(230,230,0);
     }
     
     if(deformation<100)
     {
         car.shapeColor=color(0,255,0);
     }
    }






  background(255,255,255);  
  drawSprites();
}