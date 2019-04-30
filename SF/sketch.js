// import processing.sound.*;
// let point;
// let backgroundMusic;
// let engine;

var version = "2.0";
var versionColor;

// var filename1 = "highScores.txt";
var saveHighScore = [];
var lines = [];
var musicOn = [];
var soundOn = [];

var x;
var y;
var planeWidth = 95;     // and dimensions
var planeWidthFast = 105;     // and dimensions
var planeHeight = 35;

var planeHitboxX;
var planeHitboxFastX;
var planeHitboxY;
var planeHitboxWidth = planeWidth - 5;     // and dimensions
var planeHitboxWidthFast = planeWidthFast - 20;     // and dimensions
var planeHitboxHeight = planeHeight - 20;

var speed;
var moving;
var timer;
var lastTimer;

var enemy1x;
var enemy1y;
var enemy1TopY;
var enemy1BottomY;
var enemy1State;

var enemyWidth = 25;
var enemyHeight = 25;

var enemy2x;
var enemy2y;
var enemy2StartY;

var enemy3x;
var enemy3y;
var enemy3StartY;

var enemySpeed;

var score;
var endScore;
var highScore;
var highestScore;

var musicIconX = 1280 - 75 - 10;
var musicIconY = 720 - 75 - 10;
var musicIconOn;
var overButtonMusic;

var clickIconTime;
var gameLoadCheck;

var soundIconX = 1280 - 150 - 20;
var soundIconY = 720 - 75 - 10;
var soundIconOn;
var overButtonSound;

var hit;
var hitTime;
var hitOpacity;

var backgroundX;
var inByte;
var Right;
var Left;
let plane;
let boostImages = [4];
var numFrames = 40;  // The number of frames in the animation
var currentFrame = 0;

let moreBoostImages = [40];
var numFramesMore = 40;  // The number of frames in the animation
var currentFrameMore = 0;

let enemy1;
let enemy2;
let enemy3;
let logo;
let musicIcon;
let soundIcon;
let iconSelected;
let musicIconOff;
let soundIconOff;
let stars;
let cursor;
let cursorOver;
var Timer = true;

var startGame = false;

var scoreFont;
var highScoreFont;

var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;
var tabPressed = false;
var cPressed = false;
var hPressed = false;

function setup(){
  createCanvas(1280, 720);
  noCursor();

  x = 1280/8;
  y = 720/2;
  speed = 3;
  backgroundX = 0;



  // point = loadSound("coin.wav");
  // backgroundMusic = loadSound("Stardrive.wav");
  // engine = loadSound("rocketEngine.wav");

  plane = loadImage("pictures/"+"plane.png");
  boostImages[0] = loadImage("pictures/"+"boost1.png");
  boostImages[1] = loadImage("pictures/"+"boost2.png");
  boostImages[2] = loadImage("pictures/"+"boost3.png");
  boostImages[3] = loadImage("pictures/"+"boost4.png");

  moreBoostImages[0] = loadImage("pictures/"+"moreBoost1.png");
  moreBoostImages[1] = loadImage("pictures/"+"moreBoost2.png");
  moreBoostImages[2] = loadImage("pictures/"+"moreBoost3.png");
  moreBoostImages[3] = loadImage("pictures/"+"moreBoost4.png");

  enemy1 = loadImage("pictures/"+"enemy1.png");
  enemy2 = loadImage("pictures/"+"enemy2.png");
  enemy3 = loadImage("pictures/"+"enemy3.png");
  logo = loadImage("pictures/"+"Icon.png");
  musicIcon = loadImage("pictures/"+"musicIcon.png");
  soundIcon = loadImage("pictures/"+"soundIcon.png");
  iconSelected = loadImage("pictures/"+"iconSelected.png");
  musicIconOff = loadImage("pictures/"+"musicIconOff.png");
  soundIconOff = loadImage("pictures/"+"soundIconOff.png");
  stars = loadImage("pictures/"+"stars.png");
  cursor = loadImage("pictures/"+"cursor.png");
  cursorOver = loadImage("pictures/"+"cursorOver.png");

  // surface.setIcon(logo);
  // surface.setTitle("Star Fight " + version);

  spawnEnemies();

  scoreFont = loadFont('data/Fipps-Regular.otf', 50);
  highScoreFont = loadFont('data/Fipps-Regular.otf', 30);
  score = 0;

  highScore = 0;
}
function draw(){
  if (gameLoadCheck == 0){
    loadGame();
  }
  if (startGame == false){
    if (mousePressed || keyPressed){
      startGame = true;
    }
    if (versionColor >= 255) {
    versionColor = 0;
    }  else  {
      versionColor += 0.5;
    }
    colorMode(HSB);
    background(000019);
    textAlign(CENTER);
    textFont(highScoreFont);
    fill(versionColor, 255, 255);
    noStroke();
    text(version, 1280/2 + (textWidth("Welcome to Star Fight version"))/2 + 20, 150);
    fill(255, 230, 0);
    text("Welcome to Star Fight version", 1280/2 - textWidth(version) + 37, 150);
    fill(0, 255, 27);
    text("Move around with the arrow keys or WASD\nand afunction the aliens\n\nSee additional controls by pressing C\n\nClick on the screen to continue",1280/2, 250);
    cursorOrNot();
    } else {
      colorMode(RGB);
  background(0);
  image(stars, backgroundX, 0, 9000, 720);
  if (backgroundX == -9000 +1280){
    backgroundX = 1;
  } else {
    backgroundX -= 1;
  }

  //image(clouds, 0, 0, 1280, 720);
  moving = 0;

  speedOfEnemy();

  controls();


  if (x>width-105){
    x = width - 105;
  }
  if (x<1){
    x = 1;
  }
  if (y>height-35){
    y = height - 35;
  }
  if (y<1){
    y = 1;
  }



  // stroke(99, 82, 85);
  // strokeWeight(5);
  fill(192, 232, 249);
  image(plane, x, y, planeWidth, planeHeight);
  if (moving == 0){
    // engine.stop();
  } else if (moving == 1){
    boostAnimation();
  } else if (moving == 2){
    moreBoostAnimation();
  }

  if (hPressed) {
    showHitboxes();
  }
  enemy();



  // if (highScore < score){
  //   highScore = score;
  //   highestScore = 1;
  // } else if (highScore > score){
  //   highestScore = 0;
  // }
  if (highestScore == 1){
    textAlign(CORNER);
    textFont(highScoreFont);
    fill(0, 255, 27, 255-map(millis()%2000,0,2000,0,300));
    text("New High Score", 875, 90);
    //saveGame();
  }

  textAlign(CORNER);
  textSize(30);
  fill(192, 232, 249);
  text("High Score: " + highScore, 475, 90);


  if(hitTime + 1000 > millis()){
    if (endScore == highScore){
      fill(0, 255, 27);
    } else {
      fill(255, 0, 4);
    }
    textFont(highScoreFont);
    text("Score: " + endScore, 40, 90);
  } else {
    textFont(highScoreFont);
    fill(255, 230, 0);
    text("Score: " + score, 40, 90);
  }



  buttons();
  // musicOrNot();
  chechIfHit();
  cursorOrNot();


  if (tabPressed){
     textFont(highScoreFont);
     fill(0, 255, 27);
     textAlign(CENTER);
     text("1: " + scores[0], 1280/2, 720/9*3);
     text("2: " + scores[1], 1280/2, 720/9*4);
     text("3: " + scores[2], 1280/2, 720/9*5);
     text("4: " + scores[3], 1280/2, 720/9*6);
     text("5: " + scores[4], 1280/2, 720/9*7);
   }
   if (cPressed){
     textFont(highScoreFont);
     fill(0, 255, 27);
     textAlign(CENTER);
     text("Arrow keys or WASD = move", 1280/2, 720/9*3);
     text("DELETE = Screenshot", 1280/2, 720/9*4);
     text("O or ESC = Close the program", 1280/2, 720/9*5);
     text("H = Show hitboxes", 1280/2, 720/9*6);
     text("TAB = Show High Scores", 1280/2, 720/9*7);
   }
  }

  if(hit == 1 && score == highScore){

  }
}

function checkTime(){
  lastTimer = millis() + 1000;
}


function showHitboxes(){
  stroke(99, 82, 85, 100);
  strokeWeight(5);
  fill(192, 232, 249);
  rect(planeHitboxX,planeHitboxY,planeHitboxWidth,planeHitboxHeight);
  rect(enemy1x,enemy1y,enemyWidth,enemyHeight);
  rect(enemy2x,enemy2y,enemyWidth,enemyHeight);
  rect(enemy3x,enemy3y,enemyWidth,enemyHeight);
}
