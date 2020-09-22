const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,395,800,10);
  pF1 = new Ground(300,200,105,10);
  pF2 = new Ground(600,100,105,10);
  //level 1 1
  block1 = new Box(7.5,192.5,15,15);
  block2 = new Box(22.5,192.5,15,15);
  block3 = new Box(37.5,192.5,15,15);
  block4 = new Box(52.5,192.5,15,15);
  block5 = new Box(67.5,192.5,15,15);
  block6 = new Box(82.5,192.5,15,15);
  block7 = new Box(97.5,192.5,15,15);
  //level 2 1
  block8 = new Box(0,185,15,15);
  block9 = new Box(0,185,15,15);
  block10 = new Box(0,185,15,15);
  block11 = new Box(0,185,15,15);
  block12 = new Box(0,185,15,15);
  //level 3 1
  block13 = new Box(0,177.5,15,15);
  block14 = new Box(0,177.5,15,15);
  block15 = new Box(0,177.5,15,15);
  //level top 1
  block16 = new Box(0,170,15,15);

  //level 1 2
  block17 = new Box(0,92.5,15,15);
  block18 = new Box(0,92.5,15,15);
  block19 = new Box(0,92.5,15,15);
  block20 = new Box(0,92.5,15,15);
  block21 = new Box(0,92.5,15,15);
  block22 = new Box(0,92.5,15,15);
  block23 = new Box(0,92.5,15,15);
  //level 2 2
  block24 = new Box(0,85,15,15);
  block25 = new Box(0,85,15,15);
  block26 = new Box(0,85,15,15);
  block27 = new Box(0,85,15,15);
  block28 = new Box(0,85,15,15);
  //level 3 2
  block29 = new Box(0,77.5,15,15);
  block30 = new Box(0,77.5,15,15);
  block31 = new Box(0,77.5,15,15);
  //level top 2
  block32 = new Box(0,70,15,15);
}

function draw() {
  background(0);  
  drawSprites();
  ground.display();
  pF1.display();
  pF2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
}