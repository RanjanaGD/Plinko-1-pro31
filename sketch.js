const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particles
var plinkos
var divisions
var ground

var particle=[]
var plinkos=[]
var divisions=[]

var divisionHeight=300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
    world = engine.world;
  //createSprite(400, 200, 50, 50);
ground= new Ground(200,790,600,10)
division1=new Division(80,640,10,300)
division2=new Division(140,640,10,300)
division3=new Division(200,640,10,300)
division4=new Division(260,640,10,300)
division5=new Division(320,640,10,300)
division6=new Division(400,640,10,300)
division7=new Division(4,640,10,300)
division8=new Division(475,640,10,300)
plinkos=new Plinko(100,100,40)




Engine.run(engine);

}

function draw() {
  background(0);  


ground.display();
division1.display();
division2.display();
division3.display();
division4.display();
division5.display();
division6.display();
division7.display();
division8.display();
plinkos.display();

  drawSprites();
}


if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10));
}

for(var j=0;j<particle.length;j++){
  particle[j].display();
}

for(var k=0;k< divisions.length;k++){
  divisions[k].display();
}

for(var k=0;k<=innerWidth;k=k+80){
  divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
}
