const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup(){
    createCanvas(1000,700);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
  
    ground= new Ground(425,690,2000,20);
    stand1=new Stand(380,300,270,20);
    stand2=new Stand(700,200,200,20);

//boxes for stand1
    block1=new Box(280,275,30,40);
    block2=new Box(310,275,30,40);
    block3=new Box(340,275,30,40);
    block4=new Box(370,275,30,40);
    block5=new Box(400,275,30,40);
    block6=new Box(430,275,30,40);
    block7=new Box(460,275,30,40);
    block8=new Box(490,275,30,40);
//boxes for stand2
block9=new Box(310,235,30,40);
block10=new Box(340,235,30,40);
block11=new Box(370,235,30,40);
block12=new Box(400,235,30,40);
block13=new Box(430,235,30,40);
block14=new Box(460,235,30,40);
block15=new Box(340,195,30,40);
block16=new Box(370,195,30,40);
block17=new Box(400,195,30,40);
    
ball =Bodies.circle(50,200,20);
World.add(world,ball);
slingShot=new Sling(this.ball,{x:100,y:200});

}
function draw(){
background("brown");
  //Engine.update(engine);
slingShot.display();
stand1.display();
stand2.display();
ground.display();

//stand1
strokeWeight(4);
stroke("black");
fill("pink");
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();

//stand2
strokeWeight(4);
stroke("black");
fill("yellow");
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();

imageMode(CENTER);
image(polygon_img,ball.position.x,ball.position.y,40,40);

text("Drag the Hexagonal stone and Realease it,to launch it towards the blocks.",600,250);


    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}

function mouseRealeased(){
    slingShot.fly();
}




