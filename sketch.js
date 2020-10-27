const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var building;
var gameState = 1;
var player;
var p1,p2; 
var hard;
var move = 0;
function preload(){
    buildingimg = loadImage("building.png");
    paddle = loadImage("paddle.png");
    paddle2 = loadImage("blue.png");
    point = loadImage("point.png");
    paddle3 = loadImage("red.png");
    playerryt = loadImage("user.png");
}

function setup(){
    canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;
   
    building = createSprite(500,300,200,200);
    building.addImage(buildingimg);
    building.scale = 0.9;
   
  /*  player = createSprite(500,500);
    player.addImage(playerryt);
    player.scale = 0.15;   */
    
  

   //creating game modes 
   hard=createButton("HARDCORE");
   hard.position(200,15);
   hard.mousePressed(hardMode);

    //adding boundries 
    b1 = createSprite(displayWidth/2-12,displayHeight-55,280,10);
    b2 = createSprite(432,340,5,400);
    b3 = createSprite(570,340,5,400);
    

   //creating paddles 
    /*p1 = createSprite(540,680,10,3);
    p1.addImage(paddle);
    p1.scale = 0.17;
    p2 = createSprite(500,645,10,3);
    p2.addImage(paddle);
    p2.scale = 0.17;
    p3 = createSprite(580,645,10,3);
    p3.addImage(paddle);
    p3.scale = 0.17;
    p4 = createSprite(540,610,10,3);
    p4.addImage(paddle);
    p4.scale = 0.17;
    p5 = createSprite(420,645,10,3);
    p5.addImage(paddle);
    p5.scale = 0.17;
    p6 = createSprite(460,680,10,3);
    p6.addImage(paddle);
    p6.scale = 0.17;
    p7 = createSprite(460,610,10,3);
    p7.addImage(paddle);
    p7.scale = 0.17;
    p8 = createSprite(500,572,10,3);
    p8.addImage(paddle);
    p8.scale = 0.50;
    p9 = createSprite(500,572,10,3);
    p9.addImage(paddle);
    p9.scale = 0.50;
    p10 = createSprite(450,532,30,10);
    p10.addImage(paddle2);
    p10.scale = 0.33;
    p11 = createSprite(553,532,30,10);
    p11.addImage(paddle2);
    p11.scale = 0.33;
    p12 = createSprite(500,500,30,10);
    p12.addImage(paddle3);
    p12.scale = 0.20;
    p13 = createSprite(460,473,30,10);
    p13.addImage(paddle);
    p13.scale = 0.20;
    p14 = createSprite(545,473,30,10);
    p14.addImage(paddle);
    p14.scale = 0.20;*/

    p1 = new Paddle(540,680,30,3,"Green");
    p2 = new Paddle(500,645,30,3,"green");
    p3 = new Paddle(580,645,30,3,"green");
    p4 = new Paddle(540,610,30,3,"green");
    p5 = new Paddle(420,645,30,3,"green");
    p6 = new Paddle(460,680,30,3,"green");
    p7 = new Paddle(460,610,30,3,"green");
    p8 = new Paddle(505,572,60,5,"blue");
    p9 = new Paddle(450,532,30,3,"blue");
    p10 = new Paddle(555,532,30,3,"blue");
    p11 = new Paddle(503,500,40,3,"green",0,-5);
    p12 = new Paddle(455,473,30,3,"green");
    p13 = new Paddle(550,473,30,3,"green");
    p14 = new Paddle(504,440,90,3,"red");
    p15 = new Paddle(504,400,30,3,"green");
    p16 = new Paddle(456,400,32,3,"green",8,0);
    p17 = new Paddle(550,400,32,3,"green",-8,0);
     


    //points
    s1 = createSprite(540,675,10,2);
    s1.addImage(point);
    s1.scale = 0.3;
    s2 = createSprite(500,640,10,2);
    s2.addImage(point);
    s2.scale = 0.3;
    player = new Player(500,500,10,20);
   
}
function draw(){
    background(255);
    Engine.update(engine);
 drawSprites();
 console.log(p11.body);
  /* player.collide(b1);
   player.collide(p1);
   player.collide(p2);
   player.collide(p3);
   player.collide(p4);
   player.collide(p5);
   player.collide(p6);
   player.collide(p7);
   player.collide(p8);
   player.collide(p9);
   player.collide(p10);*/

  
  // player.velocityY = player.velocityY+1  ;
  
    spawnpaddles();
    if(gameState === 2){

        movePaddle(p11.body,p11.body.position.x);
       //if(p12.bounceOff(b2)|| p12.bounceOff(b3)){
       // }
          
        
    }
    
    p1.display();
    p2.display();
    p3.display();
    p4.display();
    p5.display();
    p6.display();
    p7.display();
    p8.display();
    p9.display();
    p10.display();
    p11.display();
    p12.display();
    p13.display();
    p14.display();
    p15.display();
    p16.display();
    p17.display();
   
  player.display();
   // drawSprites();
   
}

function keyPressed(){
    if(keyCode === 32){
        player.velocityY = -5;
    }
    if(keyCode === 37){
        player.velocityX = -5;
    }
    if(keyCode === 39){
        player.velocityX = 5;
    }
    if(keyCode === 32){
        player.velocityY = -10;
    }
   
    
 }
function spawnpaddles(){
    if(frameCount % 50===0){
       
    }
}
function hardMode(){
   
gameState = 2;
}
function movePaddle(body,xpos){
    console.log(body.position.x);
    if(body.position.x <= xpos){
       Matter.Body.setPosition(body, body.position.x-5); 
    }
    else if(body.position.x >= xpos){
        Matter.Body.setPosition(body, body.position.x+5); 
    }

    
}


