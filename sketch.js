
function preload() {
  bckImg = loadImage("assets/bkg.png");
  player1Img = loadAnimation("assets/blue/stance1.png");
  player1Punch = loadAnimation("assets/blue/punch.png");
  player1Move = loadAnimation("assets/blue/stance1.png", "assets/blue/stance2.png");

  player2Img = loadAnimation("assets/red/stance1.png");
  player2Punch = loadAnimation("assets/red/punch.png");
  player2Move = loadAnimation("assets/red/stance1.png", "assets/red/stance2.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  player1 = createSprite(width/4, height/1.5, 50, 100);
  player1.addAnimation("standing1", player1Img);
  player1.addAnimation("move1", player1Move);
  player1.addAnimation("punching1", player1Punch);
  player1.changeAnimation("standing1");
  // player1.debug = true;
  player1.setCollider("rectangle", -15, 0, 10, 100);

  player2 = createSprite(width/1.5, height/1.5, 50, 100);
  player2.addAnimation("standing2", player2Img);
  player2.addAnimation("move2", player2Move);
  player2.addAnimation("punching2", player2Punch);
  // player2.debug = true;
  player2.setCollider("rectangle", 17, 0, 10, 100);

  isPunching = false;
}

function draw() {
  background(bckImg);
  edges = createEdgeSprites();
  
  player1.collide(edges);
  player2.collide(edges);

  player1.scale = 2;
  player1.y = height/1.5;
  player1.velocityX = 0;

  player2.scale = 2;
  player2.y = height/1.5;
  player2.velocityX = 0;

  if(keyWentDown(83)){
    player1.velocityX = 0;
    player1.changeAnimation("punching1");
  }
  if(keyWentDown(DOWN_ARROW)){
    player2.velocityX = 0;
    player2.changeAnimation("punching2");
  }

  drawSprites();
}

function keyPressed(){
  // Player 1 controls
  if(keyCode == 65){
    player1.velocityX = -70;
    player1.changeAnimation("move1");
  }
  if(keyCode == 68){
    player1.velocityX = 70;
    player1.changeAnimation("move1");
    player1.scale = 1.5;
    player1.y -= 40;
  }
  if(keyCode == 83){
    player1.velocityX = 0;
    player1.changeAnimation("punching1");
  }

  // Player 2 controls
  if(keyCode == LEFT_ARROW){
    player2.velocityX = -70;
    player2.changeAnimation("move2");
  }
  if(keyCode == RIGHT_ARROW){
    player2.velocityX = 70;
    player2.changeAnimation("move2");
    player2.scale = 1.5;
    player2.y -= 40;
  }
}

function keyReleased(){
  if(keyCode == 65 || keyCode == 68 || keyCode == 83){
    player1.changeAnimation("standing1")
  }
  if(keyCode == LEFT_ARROW || keyCode == RIGHT_ARROW || keyCode == DOWN_ARROW){
    player2.changeAnimation("standing2");
  }
}