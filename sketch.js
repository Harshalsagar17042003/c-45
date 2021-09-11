
var player, playerRunning, playerJumpping, ob1,ob2,ob2,ob4, ob1Img,ob2Img,ob3Img,ob4Img;
var ground,groundImg, bg,bgImg, obstaclesGroup;
var canvas, invisibleGround;
var obstacle;
var score;
var lifes = 3;

function preload(){
  groundImg = loadImage("road.png");
  playerRunning = loadAnimation("playerRun1.png", "playerRun2.png", "playerRun3.png");
  //playerJumpping = loadAnimation("Jump/player1.png", "Jump/player2.png", "Jump/player3.png", "Jump/player4.png", "Jump/player5.png", "Jump/player6.png", "Jump/player7.png", "Jump/player8.png", "Jump/player9.png");
  playerJumpping = loadAnimation("player3.png");
  bgImg = loadImage("bgImage3.png");
  ob1Img = loadImage("ob1.png");
  ob2Img = loadImage("ob2.png");
  ob3Img = loadImage("ob3.png");
  ob4Img = loadImage("ob4.png");
}

function setup() {
canvas = createCanvas(1000,500);

bg = createSprite(0,150,1000,500);
bg.addImage(bgImg);
bg.scale = 0.6
bg.velocityX = -2;

ground = createSprite(500,450,1400,1400);
ground.addImage(groundImg);
ground.scale = 1.5
ground.velocityX = -4;


player = createSprite(150,380,20,20);
player.addAnimation("Running", playerRunning);
player.addAnimation("jumping",playerJumpping)


obstaclesGroup = createGroup();

 
invisibleGround = createSprite(100,450,500,20);
invisibleGround.shapeColor="red"
invisibleGround.visible = false;

score = 0;

}

function draw() {
  background("#4CB6FF");

  fill("black");
  textSize(40);
  text("Score: "+ score, 800,50);

  score = score + Math.round(getFrameRate()/60);

  fill("black");
  textSize(40);
  text("Lifes: "+ lifes, 800,100);

  if (player.isTouching(obstaclesGroup))
  {
    lifes = lifes-1;
  }


  if (ground.x < 400){
    ground.x = ground.width/2;
  }

  if (bg.x < 0){
    bg.x = bg.width/4;
  }
  
  //camera.position.x = player.x+300;
  //camera.position.y = player.y-125;


  if(keyDown("UP_ARROW") && player.y >= 350){
     //player.addAnimation("Jumping", Jumpping);
     player.changeAnimation("jumping",playerJumpping)
      player.velocityY = -12;
      
  }

  player.velocityY = player.velocityY + 0.8
  if( player.velocityY > 0)
  {
  player.changeAnimation("Running", playerRunning);
  }

  player.collide(invisibleGround);
  
  if(keyDown("Down_ARROW")){
    
  }

    
  if(keyDown("space")){
      
  }

  spawnobstacles()
   //obstaclesGroup.setLifetimeEach(-1);
   
   //obstaclesGroup.setVelocityXEach(0);


  drawSprites()
}


function spawnobstacles()
{

  if (frameCount % 60 === 0){
    var obstacle = createSprite(1000,450,10,40);
    //obstacle.velocityX = -(6 + score/100);
     obstacle.velocityX = -10;
     obstacle.y = Math.round(random(400,450));
     //generate random obstacles
     var rand = Math.round(random(1,4));
     switch(rand) {
       case 1: obstacle.addImage(ob1Img);
               obstacle.scale = 0.15;
               break;
       case 2: obstacle.addImage(ob2Img);
               obstacle.scale = 0.15;
               break;
       case 3: obstacle.addImage(ob3Img);
               obstacle.scale = 0.12;
               break;
       case 4: obstacle.addImage(ob4Img);
               obstacle.scale = 0.12;
               break;
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     //obstacle.scale = 0.15;
     obstacle.lifetime = 800;
    
    //add each obstacle to the group
     obstaclesGroup.add(obstacle);
  }
}





