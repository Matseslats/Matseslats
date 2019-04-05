var barHeight, barTextHeight, nameHeight, descHeight, textSpace;
var barLine = 8;
var programAmmount = 4;
var spacing;

let SFlogo, SNlogo, FClogo, BClogo;

function preload() {
  imageNames[0] = loadImage("pictures/StarFight/icon.png");
  imageNames[1] = loadImage("pictures/SpaceNews/icon.png");
  imageNames[2] = loadImage("pictures/FlappyCube/icon.png");
  imageNames[3] = loadImage("pictures/BinaryClock/icon.png");

}

function setup() {
  createCanvas(windowWidth, 2000);

  spacing = width/8;
  textSpace = spacing/20;
  barHeight = 100;
  imageWidth = width/4;
  imageHeight = imageWidth/16*9;
  barTextHeight = barHeight/2;
  nameHeight = imageHeight/4;
  descHeight = nameHeight/3;
  imageX = width/2-imageWidth/2-spacing/4;

  imageNames[0].resize(imageWidth, imageHeight);
  imageNames[1].resize(imageWidth, imageHeight);
  imageNames[2].resize(imageWidth, imageHeight);
  imageNames[3].resize(imageWidth, imageHeight);

  background(0);

  bar();
  //images();
  programs();
}

function draw() {
  checkClick();
}

function bar() {
  rectMode(CORNER);
  fill(255);
  noStroke();
  rect(0, 0, width, barHeight);
  strokeWeight(barLine);
  stroke(150, 100, 255);
  line(0, barHeight + barLine/2, width, barHeight + barLine/2);
  stroke(150, 100, 255);
  fill(150, 100, 255);
  strokeWeight(1);
  textAlign(CENTER, CENTER);
  textSize(barTextHeight);
  text("Matseslats", width/2, barHeight/2);
}
