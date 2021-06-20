
var  ball, bg;
var ObsGroup;


function preload(){
  ballI = loadImage("Images/ball.png");
  bg = loadImage("Images/bg2.png");
  pI = loadImage("Images/laser.png");
  ver = loadImage("Images/vertical.png");
  hor = loadImage("Images/Horizontal.png");
  dI = loadImage("Images/dropdown.png");
  xI = loadImage("Images/lite.png");
  stone1I = loadImage("Images/spacestone.png");
  key = loadImage("Images/key.png");
  door= loadImage("Images/door.jpg");
  obsI = loadImage("Images/obs.png");
}
function setup() {

  createCanvas(900, 652);

  ball = createSprite(40, 50, 45, 45);
  ball.shapeColor="pink";
  ball.velocityY = 3;
  ball.addImage(ballI);
  ball.scale = 0.05;
  ball.setCollider("circle", 10, 10);
   
  stone1 = createSprite(450, 500);
  stone1.addImage(stone1I);
  stone1.scale = 0.1

  key1 = createSprite(453, 390);
  key1.addImage(key);
  key1.scale = 0.1; 

  //edges
  //edge1 = createSprite(0,328,50, 620);
  //edge1.shapeColor = "white";
  //edge2 = createSprite(900,328,50, 620);
  //edge2.shapeColor = "white";
  //edge3 = createSprite(450, 0, 900, 25);
  //edge3.shapeColor = "white";
  //edge4 = createSprite(450, 652, 900, 50);
  //edge4.shapeColor = "white";

  //normal platforms
  {
  b1 = createSprite(68, 0, 90, 10);
  b1.shapeColor = "#79F1F7";
  b2 = createSprite(68, 100, 90, 12);
  b2.shapeColor = "#79F1F7";
  b3 = createSprite(165, 115, 55, 12);
  b3.shapeColor = "#79F1F7";
  b4 = createSprite(278, 60, 65, 15);
  b4.shapeColor = "#79F1F7";
  b5 = createSprite(430, 75, 65, 15);
  b5.shapeColor = "#79F1F7";
  b6 = createSprite(549, 142, 65, 15);
  b6.shapeColor = "#79F1F7";
  //..
  b7 = createSprite(640, 355, 122, 15);
  b7.shapeColor = "#79F1F7";  
  b8 = createSprite(660, 470, 72, 15);
  b8.shapeColor = "#79F1F7"; 
  b9 = createSprite(313.5, 338, 388, 15);
  b9.shapeColor = "#79F1F7"; 
  b10 = createSprite(443, 431, 100, 15);
  b10.shapeColor = "#79F1F7"; 
  b11 = createSprite(162, 645, 103, 15);
  b11.shapeColor = "#79F1F7";
  b12 = createSprite(225, 420, 103, 15);
  b12.shapeColor = "#79F1F7";
  b13 = createSprite(413, 542, 161, 15);
  b13.shapeColor = "#79F1F7";
  b14 = createSprite(413, 655, 161, 15);
  b14.shapeColor = "#79F1F7";
  }

  //horizontal normal boxes
  {
  h1 = createSprite(500, 500, 15, 312);
  h1.shapeColor = "#79F1F7"; 
  h2 = createSprite(210, 544 , 15, 215);
  h2.shapeColor = "#79F1F7"; 
  }

  //dropDown
  {
  d1 = createSprite(754, 175, 60, 90);
  d1.addImage(dI);
  d1.scale = 0.25;  
  d2 = createSprite(68, 358, 60, 60);
  d2.addImage(dI);
  d2.scale = 0.22; 

  }

  //moving and their invisible boxes for movement
  {
  m1 = createSprite(235, 188, 58, 12);
  m1.shapeColor = "magenta";
  m1.velocityX = -3;
  inv1a = createSprite(235-75, 188, 10, 10);
  inv1a.visible= false;
  inv1b = createSprite(235+75, 188, 10, 10);
  inv1b.visible= false;
    
  m2 = createSprite(70, 215, 58, 12);
  m2.shapeColor = "magenta";
  m2.velocityX = 3;
  inv2a = createSprite(70-75, 215, 10, 10);
  inv2a.visible= false;
  inv2b = createSprite(70+75, 215, 10, 10);
  inv2b.visible= false;

  m3 = createSprite(645, 554, 55, 12);
  m3.shapeColor = "magenta";
  m3.velocityX = -3;
  inv3a = createSprite(645-75, 554, 10, 10);
  inv3a.visible= false;
  inv3b = createSprite(645+75, 554, 10, 10);
  inv3b.visible= false;
  


}

  //destruction platfrm'
  p1 = createSprite(295, 230, 670, 10);
  p1.addImage(pI);
  p1.scale= 0.97;
  p2= createSprite(225, 593, 15, 150);
  p2.addImage(ver);
  p2.scale = 0.5;
  p3= createSprite(280, 650, 100, 15);
  p3.addImage(hor);
  p3.scale = 0.25;

  //destruction boxes
  x1 = createSprite(405, 321, 10, 10);
  x1.addImage(xI); 
  x1.scale = 0.5;
  x1.velocityY = 2.5;
  x2 = createSprite(315, 248, 10, 10);
  x2.addImage(xI); 
  x2.scale = 0.5;
  x2.velocityY = -2.5;
  x3 = createSprite(225, 321, 10, 10);
  x3.addImage(xI); 
  x3.scale = 0.5;
  x3.velocityY = 2.5;
  x4 = createSprite(135, 248, 10, 10);
  x4.addImage(xI); 
  x4.scale = 0.5;
  x4.velocityY = -2.5;

  //appear/dissappear
  a1 = createSprite(355, 100, 55, 15);
  a1.shapeColor = "steelBlue";
  a1.velocityY = 3;
  A1inv1 = createSprite(348, 80, 10, 10);
  A1inv1.visible = false;
  a2 = createSprite(654, 95, 64, 15);
  a2.shapeColor = "steelBlue";
  a2.velocityY = 4;
  A2inv1 = createSprite(650, 45, 10, 10);
  A2inv1.visible = false;
  a3 = createSprite(175, 532, 50, 15);
  a3.shapeColor = "steelBlue";
  a4 = createSprite(125, 465, 40, 15);
  a4.shapeColor = "steelBlue";
  a5 = createSprite(240, 510, 50, 15);
  a5.shapeColor = "steelBlue";

  //bouncy
  o1 = createSprite(539, 560, 50, 40);
  o1.shapeColor = "#C54B8C";

  //doors
  D1 = createSprite(490, 285, 30, 50);
  D1.addImage(door);
  D1.scale = 0.27;
  D2 = createSprite(408, 384.8, 30, 60);
  D2.addImage(door);
  D2.scale = 0.22;
  D3 = createSprite(405, 488.5, 30, 60);
  D3.addImage(door);
  D3.scale = 0.27;

  //dungen
  dungen = createSprite(482, 598.75, 20, 96.4);

  obsGroup = createGroup();
}

function draw() {
  background(bg);  
  text(mouseX+","+mouseY,mouseX-5,mouseY-5);
  
  //movement
  if(keyDown("SPACE")){
    ball.velocityY = 5;
  }
  if(keyDown(RIGHT_ARROW)){
    ball.x += 10;
  }else if(keyDown(LEFT_ARROW)){
    ball.x -= 10;
  }else if(keyDown(UP_ARROW) ){
    ball.y -= 25;
  }

  //collision 
  ball.collide(b1);
  ball.collide(b2); 
  ball.collide(b3);
  ball.collide(b4);
  ball.collide(b5);
  ball.collide(b6);
  ball.collide(b7);
  ball.collide(b8);
  ball.collide(b9);
  ball.collide(b10);
  ball.collide(b11);
  ball.collide(b12);
  ball.collide(b13);
  ball.collide(b14);
  ball.collide(h1);
  ball.collide(h2);
  ball.collide(m1);
  ball.collide(m2);
  ball.collide(m3);


  //moving object's colllision
  m1.bounceOff(inv1a);
  m1.bounceOff(inv1b);
  m2.bounceOff(inv2a);
  m2.bounceOff(inv2b);
  m3.bounceOff(inv3a);
  m3.bounceOff(inv3b);

  a1.bounceOff(p1);
  a1.bounceOff(A1inv1);
  a2.bounceOff(b7);
  a2.bounceOff(A2inv1);

  x1.bounceOff(b9);
  x1.bounceOff(p1);
  x2.bounceOff(b9);
  x2.bounceOff(p1);
  x3.bounceOff(b9);
  x3.bounceOff(p1);
  x4.bounceOff(b9);
  x4.bounceOff(p1);


  //condition for dropdown
  if(ball.isTouching(d1) ){
    d1.velocityY = 10;
    ball.velocityY = 10;
    D1.destroy();
  }else if(ball.isTouching(d2)){
    d2.velocityY = 10;
    ball.velocityY = 10;
    D2.destroy();
  }
  if (ball.isTouching(key1)){
    D3.destroy();
    key1.visible = false;
  } 
  
  if (ball.isTouching(stone1)){
    dungen.destroy();
    stone1.visible = false;
  }

  spwanObs();
  if(obsGroup.isTouching(ball)){
   canvas.destroy();
    text("GAME OVER!!!");
  }

 //ball.collide(d1);
  
  /*for(var i = 0; i <=1000; i++){
    AD1.destroy();
    if (frameCount%20 === 0){
    AD1 = createSprite(250, 300, 60, 18);
    AD1.shapeColor = "orange";
  }*/

    ball.display();
    drawSprites();
}

function spwanObs(){
  if (frameCount % 100 === 0) {
    obs = createSprite( Math.round(random(50, 500)), -5);
    obs.addImage(obsI);
    obs.scale = 0.15;
    obs.velocityY = 9;
    obs.velocityX += 2.5;

    //assign lifetime to the variable
    obs.lifetime = 500;
    
        //adjust the depth
    obs.depth = ball.depth;
    ball.depth += 1;

    //add each powr to a group
    obsGroup.add(obs);
  }
}
