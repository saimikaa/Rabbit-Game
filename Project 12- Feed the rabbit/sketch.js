var garden,rabbit;
var gardenImg,rabbitImg;
var apples, leaves;
var applesImg, leavesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applesImg = loadImage("apple.png");
  leavesImg = loadImage("leaf.png")
} 

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

rabbit.mouseX
rabbit.mouseY

var apples = Math.round(random(1,2))
console.log(apples);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  createApples();
  createLeaves();

  drawSprites();
}

function createApples() {
  if (frameCount % 80 === 0){
    if(apples === 1)
    apples = createSprite(random(50,350), 40, 10, 10);
    apples.addImage(applesImg);
    apple.scale = 0.4;
    velocityY = 3;
  }
 
  
}

function createLeaves(){
  if (frameCount % 80 ===0){
    if(leaves === 1)
    leaves = createSprite(random(50,350), 40, 10, 10);
    leaves.addImage(leavesImg);
    leaves.scale = 0.4;
    velocityY = 3;
    fill ("orange");
  }
 

}
  
