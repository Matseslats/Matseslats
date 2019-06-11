// PFont date;

var size;// = 500;
var cX, cY;
var seconds, minutes, hours;
var spacing;// = 20;

let xml;
var articleNo = 0;
let pubDate =  "Loading...";
let desc = "Loading...";
let specificTitle = "Loading...";
let show;

var infoAmount;
var time;
var alpha = 0;
var alphaSpeed = 64;
var moveSpeed;// = 5;

var largeText;// = 75;
var mediumText;// = 50;
var smallText;// = 25;

var hundredX = 100; //100 pixels on a 1920/1080 display, used for reference to make it easier to tweak the sizes of objects
var hundredY = 100; //100 pixels on a 1920/1080 display, used for reference to make it easier to tweak the sizes of objects

function preload(){
  xml = loadXML('assets/info.xml');
}
function setup() {
  createCanvas(1280, 720);
  //orientation(LANDSCAPE);
  textAlign(CENTER, CENTER);
  background(0);
  fill(255);
  text("Loading Font", width/2, height/3);
  hundredX = width/19.2;
  hundredY = height/10.8;
  // date = loadFont("ArialRoundedMTBold-150.vlw"); //Load font
  // textFont(date); //Set font
  background(0);
  text("Loading Font", width/2, height/3);
  text("Loading XML", width/2, height/2);
  //link("https://www.space.com/feeds/all");
  getInfo(); //Load the XML file
  text("Setting Variables", width/2, height/3*2);
  show = "clock";
  cX = width/2;
  cY = height/2;
  size = hundredY*5;
  spacing = round(hundredX*0.2);
  moveSpeed = hundredX/20;
  largeText = hundredY*0.75;
  mediumText = hundredY/2;
  smallText = hundredY/4;
  time = millis(); //Reset timer
}

function draw() {
  seconds = second();
  minutes = minute();
  hours = hour();

  background(0);
  clocks(); //Display the clock

  if (cX >= width-hundredX*2.55-spacing) {
    //showNews();
    if (alpha < hundredX*2.55 && show == "feed") { //Animate text transition
      alpha += alphaSpeed;
    }
  }
  if (show == "clock") {
    if (alpha > 0) { //Animate text transition
      alpha -= alphaSpeed;
    } else {
      if (cX > width/2) { //Animate clock pos
        cX -= moveSpeed;
      }

      if (size < hundredY*5) { //Animate clock size
        size += hundredY/100;
      } else if (size > hundredY*5) { //Animate clock size
        size -= hundredY/100;
      }
      if (mouseX > width/2) { //If the mouse is on the right of the screen
        show = "feed"; //Set the canvas to show the feed and the clock
      }
    }
  }

  if (show == "feed") {
    if (size > hundredY*3.5) { //Animate Clock size
      size -= hundredY/100;
    }
    if (cX < width-hundredY*2.55-spacing) { //Animate clock pos
      cX += moveSpeed;
    }
    if (mouseX < width/2) { //If the mouse is on the left of the screen
      show = "clock"; //Set the canvas to only show the clock
    }
  }

  if (millis() - time >= 1500 && show == "feed" && (seconds == 0 || seconds == 60)) { //Every minute
    if (infoAmount -1 >= articleNo) { //If you have more articles left
      articleNo += 1; //Switch to the next article
      updateInfo(); //Change article info
    } else { //If you are on the last article
      articleNo = 0; //Start on article 0 again
      getInfo();//Check if theres any new articles in the XML
    }
    time = millis(); //Reset the timer
  }
  //showNews();
  //if (mouseX < width/20 && mouseY < height/20 && millis() > 10000) {
  //  exit();
  //}
}

function clocks() {
  strokeWeight(hundredY/10);
  noFill();

  //push();
  translate(cX, cY);
  stroke(100, 150, 255);
  if (hours == 0 || hours == 12) { //Instead of drawing no arc, draw a full arc
    arc(0, 0, size + spacing * 4, size + spacing * 4, -PI, PI);
  }
  arc(0, 0, size + spacing * 4, size + spacing * 4, -HALF_PI, map(hours % 12, 0, 12, -HALF_PI, PI + HALF_PI)); //Draw the hour arc

  rotate(map(hours % 12, 0, 12, -HALF_PI, PI + HALF_PI)); //Rotate by -90 degrees
  line(0, 0, size/4-spacing * 2, 0); //Draw the hour hand
  rotate(map(hours % 12, 0, 12, -HALF_PI, PI + HALF_PI)*-1); //Rotate by 90 degrees
  //pop();

  //push();
  //translate(cX, cY);
  stroke(150, 255, 100);
  if (minutes == 0) { //Instead of drawing no arc, draw a full arc
    arc(0, 0, size + spacing * 2, size + spacing * 2, -PI, PI);
  }
  arc(0, 0, size + spacing * 2, size + spacing * 2, -HALF_PI, map(minutes, 0, 60, -HALF_PI, PI + HALF_PI)); //Draw the minute arc

  rotate(map(minutes, 0, 60, -HALF_PI, PI + HALF_PI)); //Rotate by -90 degrees
  line(0, 0, size/3-spacing * 2, 0); //Draw the minute hand
  rotate(map(minutes, 0, 60, -HALF_PI, PI + HALF_PI)*-1); //Rotate by 90 degrees
  //pop();

  //push();
  //translate(cX, cY);
  stroke(255, 100, 150);
  if (seconds == 0) { //Instead of drawing no arc, draw a full arc
    arc(0, 0, size, size, -PI, PI);
  }
  arc(0, 0, size, size, -HALF_PI, map(seconds, 0, 60, -HALF_PI, PI + HALF_PI)); //Draw the second arc

  rotate(map(seconds, 0, 60, -HALF_PI, PI + HALF_PI)); //Rotate by -90 degrees
  line(0, 0, size/2-spacing * 2, 0); //Draw the second hand
  rotate(map(seconds, 0, 60, -HALF_PI, PI + HALF_PI)*-1); //Rotate by 90 degrees
  //pop();

  strokeWeight(hundredY*0.2);
  stroke(125);
  point(0, 0); //Draw a dot in the middle of the clock

  translate(-cX, -cY);

  noStroke();
  if (cX > width/2) {
    textAlign(CORNER, BOTTOM);
    fill(255); //White text
    textSize(largeText);
    text(specificTitle, spacing, 0, 800, height/2 - spacing); //Write the title

    //fill(150, alpha); //Gray text
    //textSize(mediumText);
    //textAlign(CENTER, CENTER);
    //text(day() + "/" + month() + " " + year(), cX, cY+ size);

    fill(150); //Gray text
    textAlign(LEFT, TOP);
    textSize(mediumText);
    text(desc, spacing, height/2, 800, height/2); //Write the description

    textSize(smallText);
    text(pubDate, spacing, height-spacing-smallText); //Write when the article was published
    text((articleNo + 1) + "/" + (infoAmount +1), spacing, spacing + smallText); //Array goes from 0-29, add 1 to each number to make it look like it goes from 1-30
  }
}

function getInfo() {

  updateInfo();
  // print("info");
}

function updateInfo() {    //Set different strings to different parts of the XML file
  let content = xml.getChild("channel");         //Get the content of the page
  let article = content.getChildren("item");   //Split the content up to articles

  //for (int i = 0; i < article.length && i < infoAmount; i ++) {
  //  XML titles[] = article[i].getChildren("title");
  //}

  infoAmount = article.length - 1;               //Set amount of articles

  let title = article[articleNo].getChild("title"); //Get the title
  specificTitle = title.getContent();
  // print(specificTitle);

  let description = article[articleNo].getChild("description"); //Get the description
  desc = description.getContent();

  let date = article[articleNo].getChild("pubDate"); //Get the time the article was published
  pubDate = date.getContent();
}

//void showNews() {
//  textAlign(CORNER, BOTTOM);
//  fill(255, alpha); //White text
//  textSize(largeText);
//  text(specificTitle, spacing, 0, hundredY*10, height/2 - spacing); //Write the title

//  //fill(150, alpha); //Gray text
//  //textSize(mediumText);
//  //textAlign(CENTER, CENTER);
//  //text(day() + "/" + month() + " " + year(), cX, cY+ size);

//  fill(150, alpha); //Gray text
//  textAlign(CORNER, CORNER);
//  textSize(mediumText);
//  text(desc, spacing, height/2, hundredY*10, height/2); //Write the description
//  textSize(smallText);
//  text(pubDate, spacing, height-spacing-smallText); //Write when the article was published
//  text((articleNo + 1) + "/" + (infoAmount +1), spacing, spacing + smallText); //Array goes from 0-29, add 1 to each number to make it look like it goes from 1-30
//}
