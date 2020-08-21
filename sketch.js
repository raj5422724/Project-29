const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, ball, ground, ground1, ground2, slingshot1;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  polygon = new poly();

  ground = new Ground(400, 390, 800, 20);
  ground1 = new Ground (350, 290, 240, 20);
  ground2 = new Ground (630, 190, 200, 20);

  // 1st pyramid 4th layer
  block = new blocks(260,265);
  block1 = new blocks(290, 265);
  block2 = new blocks(320, 265);
  block3 = new blocks(350, 265);
  block4 = new blocks(380, 265);
  block5 = new blocks(410, 265);
  block6 = new blocks(440,265); 

  // 1st pyramid 3rd layer
  block7 = new blocks(290,230);
  block8 = new blocks(320, 230);
  block9 = new blocks(350, 230);
  block10 = new blocks(380, 230);
  block11 = new blocks(410,230);

  // 1st pyramd 2nd layer
  block12 = new blocks(320,195);
  block13 = new blocks(350, 195);
  block14 = new blocks(380,195);

  // 1st pyramid 1st layer
  block15 = new blocks(350,160);

  // 2nd pyramid 3rd layer
  blocks1= new blocks(570, 160);
  blocks2= new blocks(600, 160);
  blocks3= new blocks(630, 160);
  blocks4= new blocks(660, 160);
  blocks5= new blocks(690, 160);

  // 2nd pyramid 2nd layer
  blocks6 = new blocks(600, 125);
  blocks7 = new blocks(630, 125);
  blocks8 = new blocks(660, 125);

  // 2nd pyramid 1st layer
  blocks9 = new blocks(630, 90);

  slingshot = new slingshot(polygon.body,{x:100, y:150});

}

function draw() {
  rectMode(CENTER);
  background(255,255,255); 
  Engine.update(engine);

  polygon.display();
  slingshot.display();
  
  fill("skyblue");
  block.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();

  fill("pink");
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();

  fill("lime");
  block12.display();
  block13.display();
  block14.display();

  fill("grey");
  block15.display();

  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();

  fill("pink");
  blocks6.display();
  blocks7.display();
  blocks8.display();

  fill("lime");
  blocks9.display();

  ground.display();
  ground1.display();
  ground2.display();
  drawSprites();
  textSize(20);
  fill("black");
  text("Press Space to reattatch",280,50);
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function keyPressed() {
  if(keyCode === 32){
    Matter.Body.setPosition(polygon.body, {x: 75 , y: 200});
    slingshot.attatch(polygon.body);
  }
}

function mouseReleased(){
  slingshot.fly();
}

