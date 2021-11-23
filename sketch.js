const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher,playerArrow;
var playerArrows = [];


function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);

  var options = {
    isStatic: true
  };

  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);

  player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
  World.add(world,player)

  playerArcher = new PlayerArcher(
    340,
    playerBase.position.y - 112,
    120,
    120
  );
 playerArrow = new PlayerArrow(
  playerArcher.body.position.x,
  playerArcher.body.position.y,
  100,
  10
 );
 
}

function draw() {
  background(backgroundImg);

  Engine.update(engine);
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150)
  image(playerimage,player.position.x,player.position.y,50,180)

  playerArcher.display();

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  if(keyCode === 32){
   playerArrow.shoot(playerArcher.body.archerAngle)
  }

 // playerArrow.display();
  for(var i=0;i<playerArrows.length;i++){
    showPlayerArrow(playerArrows[i],i)
  }
//keyPressed();
//keyReleased();
  
}

function keyReleased(){
if(keyCode=== 32){
 playerArrow.shoot(playerArcher.body.archerAngle)
}
}

function keyPressed(){
if(keyCode === 32){
 var playerArrow=new PlayerArrow(playerArcher.x,playerArcher.y);
 playerArrows.push(playerArrow);
}

 }



 function showPlayerArrow(playerArrow,i){
 if(playerArrow){
   playerArrow.display();
 }
 }
//function shootArrow(){
//if(keyCode === 32){
 // arrow.shoot(playerArcher.body.archerAngle)
//}

//}


