//namespaces or alias names
const Engine = Matter.Engine
const World= Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint;

var engine,world,ground;
var stand1,stand2;

function preload(){

}

function setup(){

createCanvas(900,400);
engine= Engine.create();
world= engine.world;



ground= new Ground()
 stand1 = new Stand(390,300,250,10);
 stand2 = new Stand(700,200,200,10);

 box1 = new Box(300,275,30,40);
 box2 = new Box(330,275,30,40);
 box3 = new Box(360,275,30,40);
 box4 = new Box(390,275,30,40);
 box5 = new Box(420,275,30,40);
 box6 = new Box(450,275,30,40);
 box7 = new Box(480,275,30,40);
 box8 = new Box(330,235,30,40);
 box9 = new Box(360,235,30,40);
 box10 = new Box(390,235,30,40);
 box11 = new Box(420,235,30,40);
 box12 = new Box(450,235,30,40);
 box13 = new Box(360,205,30,40);
 box14 = new Box(390,205,30,40);
 box15 = new Box(420,205,30,40);
 box16 = new Box(390,155,30,40);

 sbox1= new Box(640,175,30,40);
 sbox2= new Box(670,175,30,40);
 sbox3= new Box(700,175,30,40);
 sbox4= new Box(730,175,30,40);
 sbox5= new Box(760,175,30,40);
 sbox6= new Box(670,145,30,40);
 sbox7= new Box(700,145,30,40);
 sbox8= new Box(730,145,30,40);
 sbox9= new Box(700,115,30,40);
 

 


}
function draw (){

    background(56,44,44);
    Engine.update(engine);
    ground.display();
    stand1.display();
    stand2.display();
    text("drag the hexagon to launch it towards the blocks",100,20)
    fill("skyblue")
    box1.show();
    box2.show();
    box3.show();
    box4.show();
    box5.show();
    box6.show();
    box7.show();
    fill("yellow")
    box8.show();
    box9.show();
    box10.show();
    box11.show();
    box12.show();
    fill("red");
    box13.show();
    box14.show();
    box15.show();
    fill("green")
    box16.show();
    fill("pink")
    sbox1.show();
    sbox2.show();
    sbox3.show();
    sbox4.show();
    sbox5.show();
    fill("brown");
    sbox6.show();
    sbox7.show();
    sbox8.show();
    fill("grey");
    sbox9.show();
    

    
}
