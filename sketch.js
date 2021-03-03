var hr,mn,sc;
var img

function preload(){
img = loadImage("unnamed.jpg")
}

function setup() {
  createCanvas(600,600);
  
 
  angleMode(DEGREES);

  var sprite = createSprite(0,0)
  sprite.addImage(img)
}

function draw() {
  background("lavender")  
  translate(300,300)
  rotate(-90)

  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc,0,60,0,360)
  mnAngle = map(mn,0,60,0,360)
  hrAngle = map(hr%12, 0,12, 0, 360)
  fill(248,248,198)
  circle(0, 0, 350);


  push();
  rotate(scAngle)
  stroke(0,0,255)
  strokeWeight(4)
  line(0,0,160,0)
  pop();

  push();
  rotate(mnAngle)
  stroke(0,255,160)
  strokeWeight(8)
  line(0,0,150,0)
  pop();

  push();
  rotate(hrAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,90,0)
  pop();


  drawSprites();
}
