const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var back;
var person, people;
var engine, world;
var list = [];

function preload() {
  back = loadImage("stuff.png")
  people = loadImage("snow-people.png")

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  person = Bodies.rectangle(windowWidth/2,windowHeight/2,50,100)
  World.add(world,person)


}

function draw() {
  background(back);  

  imageMode(CENTER);
  image(people,person.position.x, person.position.y,person.width,person.height)
  Matter.Body.setVelocity(person,{x:0,y:1});


  if(frameCount%20 == 0) {
    list.push(new Snowfall(random(100,700),-100,random(10,30)))
  }

  for(var k = 0; k < list.length; k++) {
    list[k].display()
  }

  fill("black")
  textSize(20)
  text("Designed by Prem Shah",windowWidth-300,windowHeight-50);
  text("Space to jump up and down arrow to jump down",50,50,)

  keyPressed()


}

function keyPressed() {
  if(keyCode === 32) {
    Matter.Body.setVelocity(person, {x:0,y:-5});
  }
}


