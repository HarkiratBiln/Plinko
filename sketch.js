//Creating the Matters
const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

//Creating the Arrays
var particles = [];
var plinkos = [];
var divisions = [];

//Creating the Variables
var divisionHeight = 300;
var ground;

var engine,world;

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;
  
  //Creating the Ground
  ground = new Ground(width/2,800,width,20);

  //Creating the for Loops
  for(var k = 0; k <= innerWidth; k = k + 80) {
    divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight));
    }

    for (var j = 75; j <= width; j = j +50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <= width -10; j = j +50) {  
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <= width; j = j +50) {
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) {
       plinkos.push(new Plinko(j,375));
    }

 
  }



function draw() {
  background(0,0,0);  
  
  //Updating the Engine
  Engine.update(engine);

  //Displaying the Variables
  ground.display

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }

  if(frameCount % 60 ===0){
  var particle = new Particle(random(30,770),10,10);
  particles.push(particle);
  }
 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }

  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();
  }
  
}