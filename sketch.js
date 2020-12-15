//namespacing using constant
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box;
var ground;
var ball
var box1
var pig1
var log1

function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;
  
  ground=new Ground(600,390,1200,10);
  
 box =  new Box(200,200,50,100)
 box1 =new Box(220,100,50,70)
 pig1= new Pig(300,300)
 log1= new Log(300,450,100,PI/2)
 log2= new Log(300,450,100,PI/2)
 

 
}

function draw() {
  background(220,255,255);  

  Engine.update(engine);
  
  ground.display();
 
   box.display();
   box1.display()
   pig1.display()
   log1.display()
   


}