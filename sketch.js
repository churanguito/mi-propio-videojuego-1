var astronaut, astronautImg
var aliens, aliensImg
var fondo, fondoImg

function preload(){
  fondoImg = loadImage("assets/fondo.png")
  astronautImg = loadImage("assets/astronaut.png")
  aliensImg = loadImage("assets/aliens.png")
}


function setup() {
  createCanvas(600,400);
  fondo = createSprite(300,200,1,1);
  fondo.addImage(fondoImg);
  fondo.scale = 0.1;
  
  astronaut = createSprite(60,150,1,1);
  astronaut.addImage(astronautImg);
  astronaut.scale = 0.15;
  
  aliens = createSprite(550,350);
  aliens.addImage(aliensImg);
  aliens.scale = 0.2;

  aliens = createSprite(550,250);
  aliens.addImage(aliensImg);
  aliens.scale = 0.2;

  aliens = createSprite(550,150);
  aliens.addImage(aliensImg)
  aliens.scale = 0.2

  aliens = createSprite(550,50)
  aliens.addImage(aliensImg)
  aliens.scale = 0.2
} 


function draw() {
  background(255,255,255);  
  
  if(keyDown("space")){
     astronaut.velocityY = -6

  }
  
  
  
  astronaut.velocityY = astronaut.velocityY +1
  drawSprites();
}