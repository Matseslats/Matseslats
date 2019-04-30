// public var cursorInFrame = true;
// public var lastFocused;

function buttons(){
  if(musicIconOn == 0){
      image(musicIconOff, musicIconX, musicIconY);
    } else if (musicIconOn == 1){
      image(musicIcon, musicIconX, musicIconY);
    }

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


      if(soundIconOn == 0){
        image(soundIconOff, soundIconX, soundIconY);

      } else if (soundIconOn == 1){
        image(soundIcon, soundIconX, soundIconY);

      }
  if (
    mouseX < musicIconX + 75 &&
    mouseX > musicIconX &&
    mouseY < musicIconY + 75 &&
    mouseY > musicIconY) {
      overButtonMusic = 1;
      tint(255, 100);
      image(iconSelected, musicIconX, musicIconY, 75, 75);
      tint(255, 255);
    } else {
      overButtonMusic = 0;
    }
  if (
    mouseX < soundIconX + 75 &&
    mouseX > soundIconX &&
    mouseY < soundIconY + 75 &&
    mouseY > soundIconY) {
      overButtonSound = 1;
      tint(255, 100);
      image(iconSelected, soundIconX, soundIconY, 75, 75);
      tint(255, 255);
    } else {
      overButtonSound = 0;
    }

}



function cursorOrNot(){
  // if (cursorInFrame){
    if (overButtonSound == 0 && overButtonMusic == 0){
      imageMode(CENTER);
      image(cursor, mouseX, mouseY, 25, 25);
      imageMode(CORNER);
    } else if (overButtonSound == 1 || overButtonMusic == 1){
      imageMode(CENTER);
      image(cursorOver, mouseX, mouseY, 25, 25);
      imageMode(CORNER);
    }
  // }
}
// public function mouseExited(){
//   cursorInFrame = false;
// }
//
// public function mouseEntered(){
//   cursorInFrame = true;
// }

function mousePressed(){
  if (
    mouseX < musicIconX + 75 &&
    mouseX > musicIconX &&
    mouseY < musicIconY + 75 &&
    mouseY > musicIconY) {

      overButtonMusic = 1;

      if(musicIconOn == 0){

        backgroundMusic.play();
        if(backgroundMusic.isPlaying() == false){
          // backgroundMusic.loop();
        }
        musicIconOn = 1;
        saveGame();

      } else if (musicIconOn == 1){

        backgroundMusic.pause();
        musicIconOn = 0;
        saveGame();
      }

    } else {

      overButtonMusic = 0;
    }

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

  if (
    mouseX < soundIconX + 75 &&
    mouseX > soundIconX &&
    mouseY < soundIconY + 75 &&
    mouseY > soundIconY) {
      overButtonSound = 1;

      if(soundIconOn == 0){

        soundIconOn = 1;
        saveGame();

      } else if (soundIconOn == 1){

        soundIconOn = 0;
        saveGame();
      }
    } else {
      overButtonSound = 0;
    }
}

// public function musicOrNot(){
//   if (lastFocused != focused && focused == true){
//     if (backgroundMusic.isPlaying() == false && musicIconOn == 1){
//       backgroundMusic.play();
//     }
//   }
//   if (lastFocused != focused && focused == false){
//     backgroundMusic.pause();
//   }
//
//   lastFocused = focused;
// }
