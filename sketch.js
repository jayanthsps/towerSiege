const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
var polygonImage;
var engine, world;
   

function preload(){
    polygonImage=loadImage("polygon.png")
}







function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    
    ground =new Ground(600,790,1200,30);
    
    stand1=new Ground(380,300,270,30);
    stand2=new Ground(700,200,200,30);

    block1=new Block(280,275,30,40)
    block2=new Block(310,275,30,40)
    block3=new Block(340,275,30,40)
    block4=new Block(370,275,30,40)
    block5=new Block(400,275,30,40)
    block6=new Block(430,275,30,40)
    block7=new Block(460,275,30,40)
    block8=new Block(490,275,30,40)
    
    block9=new Block(310,235,30,40)
    block10=new Block(340,235,30,40)
    block11=new Block(370,235,30,40)
    block12=new Block(400,235,30,40)
    block13=new Block(430,235,30,40)
    block14=new Block(460,235,30,40)

    block15=new Block(340,195,30,40)
    block16=new Block(370,195,30,40)
    block17=new Block(400,195,30,40)
    block18=new Block(430,195,30,40)

    block19=new Block(370,155,30,40)
    block20=new Block(400,155,30,40)

    block21=new Block(385,115,30,40)


    block22=new Block(640,175,30,40)
    block23=new Block(670,175,30,40)
    block24=new Block(700,175,30,40)
    block25=new Block(730,175,30,40)
    block26=new Block(760,175,30,40)

    block27=new Block(670,135,30,40)
    block28=new Block(700,135,30,40)
    block29=new Block(730,135,30,40)

    block30=new Block(700,95,30,40)

    polygon=Bodies.circle(50,500,20)
    World.add(world,polygon)

    slingshot = new SlingShot(this.polygon,{x:100, y:200});
}


function draw(){
     background("black");
     Engine.update(engine);
    
    
     
     
     ground.display(); 
     
     stand1.display();
     stand2.display();
     
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

     slingshot.display();
     
     image(polygonImage,polygon.position.x,polygon.position.y,40,40)

     
   
     drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}


function keyPressed(){
    if(keyCode===32){
        slingshot.attach(this.polygon)
    }
}