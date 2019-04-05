p5.disableFriendlyErrors = true; // disables FES

var pX, pY, x, y, w, pipeX, pipeY;
var speed = 0;   // speed of square
const gravity = 0.3; 
const distPipes = 300; // Distance between pipes
const widthPipes = 70; //Width of pipes
const gapPipes = 150; //Gap between pipes;
const ground = 30; //Hight of the ground
const border = 8;

var score, highScore = 0;

var noiseScale = 1;
var noise = 3; //Difference in pipe height

var menuTime;
var menu, left, right, jump = false;
var startGame = false;

var pipeHeight = [];
var lines = [];

//PImage icon;
let text;

function setup() {
  createCanvas(600, 600);
  //icon = loadImage("icon.png");
  //surface.setIcon(icon);
  text = createGraphics(width, height);

  w = 50;
  generate();
  noSmooth();
  text.smooth();


  //lines = loadStrings("highScore.txt");
  highScore = 0;
}

function draw() {
  background(51);

  if (startGame == false) {
    drawPipes();
    drawGround();
    drawPlayer();

    // text.beginDraw();
    text.clear();
    text.textAlign(CENTER, CENTER);
    text.textSize(50);
    text.fill(236);
    text.text("START GAME", width/2, height/2 - 25);
    text.textSize(30);
    text.text("BY PRESSING SPACE", width/2, height/2 + 25);
    // text.endDraw();
    image(text, 0, 0);

    if ((keyIsPressed && key == ' ') || mouseIsPressed) {
      startGame = true;
    }
  } else {
    drawPipes();
    drawPlayer();

    if (pY > height - ground - 25) {
      gameOver();
    } else {
      // text.beginDraw();
      text.clear();
      text.textSize(20);
      text.fill(236);
      text.textAlign(CORNER, TOP);
      text.text("SCORE: " + score, 55, 10);
      // text.endDraw();
      image(text, 0, 0);
    }
    pY = pY + speed;
    speed = speed + gravity;

    drawGround();

    move();

    if (menu) {
    } else {
      x -= 2;
    }
    score = int(-x/300);
  }
}

function move() {
  if (keyIsPressed || mouseIsPressed) {
    if (key == ' ' || mouseIsPressed) {
      if (menu) {
        // if (menuTime < millis() - 1000) {
          menu = false;
          generate();
        // }
      } else {
        jump = true;
      }
    }
  }

  if (jump) {
    speed = -3.5;// + gravity;
    jump = false;
  }
}

function drawPlayer() {
  fill(150, 100, 255);
  stroke(100, 50, 150);
  rectMode(CENTER);
  rect(pX, pY, w, w);
}

function drawGround() {
  rectMode(CORNER);
  fill(100, 255, 150);
  noStroke();
  rect(0, height - ground, width, ground);
  stroke(50, 150, 100);
  strokeWeight(border);
  line(0, height - ground, width, height - ground);
}

function drawPipes() {
  rectMode(CORNER);
  fill(100, 150, 255);
  stroke(50, 100, 150);
  strokeWeight(border);
  for (let i = 0; i < pipeHeight.length; i++) {
    pipeX = x+i*distPipes + distPipes - widthPipes;// - widthPipes/2;
    rect(pipeX, -border, widthPipes, pipeHeight[i]+border);

    var secPipeY = pipeHeight[i] + gapPipes;
    rect(pipeX, secPipeY, widthPipes, height - secPipeY);

    if (pX + w/2 > 230 + x + i*distPipes - border && pX < 230 + w/2 + x + widthPipes +i *distPipes + border) {
      if (pY - w/2 < pipeHeight[score] + border || pY + w/2 > pipeHeight[score] + gapPipes - border) {
        if (menu == false) {
          menuTime = millis();
        }
        menu = true;
      }
    }
  }
}

function generate() {
  pX = 50; //X pos of player
  pY = height/2; //Start y pos of player
  x = 0; // first pipe

  for (let i = 0; i < 100; i++) {
    noiseScale += 1;
    //var nx = map(x, 0, height, 0, 1);
    pipeHeight[i] = map(height * noise(noiseScale), 0, height, 0, height-border-ground - gapPipes);
    //console.log(noiseScale);
  }
}

function gameOver() {
  if (score > highScore) {
    highScore = score;
    //lines[0]=str(highScore);
    //trim(lines);
    //saveStrings("highScore.txt", lines);
  }
  // text.beginDraw();
  text.clear();
  text.textAlign(CENTER, CENTER);
  text.textSize(50);
  text.fill(236);
  text.text("GAME OVER", width/2, height/2 - 35);
  text.textSize(30);
  text.text("Score: " + score, width/2, height/2+ 15);
  text.text("Best: " + highScore, width/2, height/2+ 55);
  // text.endDraw();
  image(text, 0, 0);
  
  speed = 0;
  menu = true;
}
