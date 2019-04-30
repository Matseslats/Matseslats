function controls(){


  if (keyIsDown(UP_ARROW) || mouseIsPressed && mouseY < height/2) {
    y -= speed;
    moving = 1;
  }

  if (keyIsDown(DOWN_ARROW) || mouseIsPressed && mouseY > height/2) {
    y += speed;
    moving = 1;
  }

  if (keyIsDown(LEFT_ARROW)) {
    x -= speed;
    moving = 1;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    if (lastTimer > millis()){
      x += speed;
      moving = 1;
    } else if (lastTimer < millis()){
      x += speed*2;
      moving = 2;
    }
  } else {
    checkTime();
  }
  if (moving == 1){
    // if (engine.isPlaying() == false){
    //   if (soundIconOn == 1){
    //     // engine.play();
    //     // engine.amp(0.8);
    //   }
    // }
  } else {
    if (soundIconOn == 1){
      // engine.amp(1.0);
    }
  }
}

//------------------------------------------------------------------------------------------------------------------

// function keyIsPressed(){
    // if (key == 'o' || key == 'O'){
    //     exit(); // Stops the program
    //  }
    //
    //  if (key == DELETE){
    //    saveFrame("/Screenshots/" + "Screenshot-#####.png");
    //    println("Screenshot taken");
    //  }

//   if (key == 'W' || key == 'w') {
//     upPressed = true;
//   }
//   else if (key == 'S' || key == 's') {
//     downPressed = true;
//   }
//   else if (key == 'A' || key == 'a') {
//     leftPressed = true;
//   }
//   else if (key == 'D' || key == 'd') {
//     rightPressed = true;
//   }
//   else if (key == 'C' || key == 'c') {
//     cPressed = true;
//   }
//   else if (key == 'H' || key == 'h') {
//     hPressed = true;
//   }
//   else if (key == TAB) {
//     tabPressed = true;
//   }
// }
//
// function keyIsReleased(){
//   if (key == 'W' || key == 'w') {
//     upPressed = false;
//   }
//   else if (key == 'S' || key == 's') {
//     downPressed = false;
//   }
//   else if (key == 'A' || key == 'a') {
//     leftPressed = false;
//   }
//   else if (key == 'D' || key == 'd') {
//     rightPressed = false;
//   }
//   else if (key == 'C' || key == 'c') {
//     cPressed = false;
//   }
//   else if (key == 'H' || key == 'h') {
//     hPressed = false;
//   }
//   else if (key == TAB) {
//     tabPressed = false;
//   }
// }

function boostAnimation(){
  currentFrame = (currentFrame+1) % numFrames;  // Use % to cycle through frames

  if (currentFrame< 10){
    image(boostImages[0], x-10, y);
  } else if (currentFrame< 20){
    image(boostImages[1], x-10, y);
  } else if (currentFrame< 30){
    image(boostImages[2], x-10, y);
  } else {
    image(boostImages[3], x-10, y);
  }
}

function moreBoostAnimation(){
  currentFrameMore = (currentFrameMore+1) % numFramesMore;  // Use % to cycle through frames

  if (currentFrameMore< 10){
    image(moreBoostImages[0], x-10, y);
  } else if (currentFrameMore< 20){
    image(moreBoostImages[1], x-10, y);
  } else if (currentFrameMore< 30){
    image(moreBoostImages[2], x-10, y);
  } else {
    image(moreBoostImages[3], x-10, y);
  }
}
