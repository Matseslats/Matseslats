var imageWidth, imageHeight;
let imageNames = ["SFlogo", "SNlogo", "FClogo", "BClogo"];
let title = ["Star Fight", "SpaceNews", "Floppy Cube", "Binary Clock", "5"];
let desc = ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", "", "", "", ""];
let links = ["SF", "SN", "FC", "BC"]
var imageY, imageX;
var overWhatProgram;
var overX, overY = false;
var toOpen = "";

function programs() {
  for(let i = 0; i < programAmmount; i++){
    imageY = imageHeight*0.75+barHeight+barLine/2+i*imageHeight*1.25;

    imageMode(CENTER, CENTER);
    image(imageNames[i], imageX, imageY);

    rectMode(CENTER);
    noFill();
    strokeWeight(barLine/2);
    stroke(150, 100, 255);
    rect(width/2-imageWidth/2-spacing/4, imageY, imageWidth, imageHeight);

    fill(255);
    noStroke();
    textSize(nameHeight);
    textAlign(LEFT, BOTTOM);
    text(title[i], width/2, imageY-nameHeight+textSpace);

    textSize(descHeight);
    rectMode(CORNER, CORNER);
    textAlign(LEFT, TOP);
    text(desc[i], width/2, imageY-imageHeight/5+textSpace, width/3, 150);

    textAlign(LEFT, BOTTOM);
    fill(150, 100, 255);
    text("Download", width/2, imageY+imageHeight/2-textSpace);
    strokeWeight(2);
    stroke(150, 100, 255);
    line(width/2, imageY+imageHeight/2-textSpace, width/2+textWidth("Download"), imageY+imageHeight/2-textSpace);
  }
}

function checkClick() {

  for(let i = 0; i < programAmmount; i++){
    imageY = imageHeight*0.75+barHeight+barLine/2+i*imageHeight*1.25;
    var imageTop = imageY-imageHeight/2;
    var imageBottom = imageY+imageHeight/2;

    if (mouseX > imageX-imageWidth/2 && mouseX < imageX+imageWidth/2) {
      overX = true;
      // strokeWeight(10);
      // point(mouseX, 0);

    } else {
      overX = false;
    }
    if (mouseY > imageTop && mouseY < imageBottom){ //If between top of image and bottom of image
      overWhatProgram = i;
      overY = true;
      // strokeWeight(10);
      // stroke(i*50);
      // point(0, mouseY);
    } else {
      overY = false;
    }
    if (overX == true && overY == true) {
      cursor(HAND);
      if (mouseIsPressed){
        toOpen = str(i);
        // open(links[overWhatProgram], "_new");
        if (toOpen != "-") {
          openPage();
          toOpen = "-";
        }
      }
    } else {
      cursor(ARROW);
    }
  }
}

function openPage() {
  open(toOpen, "_new");
}
