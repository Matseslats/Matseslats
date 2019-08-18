var scores = [6];

function loadGame(){
  if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    highScore = localStorage.getItem("highScore");
    console.log("Loaded" + highScore);
    // scores[1] = localStorage.getItem("second");
    // scores[2] = localStorage.getItem("third");
    // scores[3] = localStorage.getItem("fourth");
    // scores[4] = localStorage.getItem("fifth");
  } else {
    // Sorry! No Web Storage support..
  }
  // lines = loadStrings(filename1);
  // scores[0] = var(lines[1]);
  // scores[1] = var(lines[2]);
  // scores[2] = var(lines[3]);
  // scores[3] = var(lines[4]);
  // scores[4] = var(lines[5]);
  // musicIconOn = var(lines[7]);
  // soundIconOn = var(lines[9]);

  if(musicIconOn == 0){
  } else {
    // backgroundMusic.loop();
  }
  gameLoadCheck = 1;
}

function saveGame(){
  if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    localStorage.setItem("highScore", highScore);
    console.log("Saved" + highScore);
    // localStorage.setItem("second", "Smith");
    // localStorage.setItem("third", "Smith");
    // localStorage.setItem("fourth", "Smith");
    // localStorage.setItem("fifth", "Smith");
  } else {
    // Sorry! No Web Storage support..
  }

  // lines[1]=str(scores[0]);
  // lines[2]=str(scores[1]);
  // lines[3]=str(scores[2]);
  // lines[4]=str(scores[3]);
  // lines[5]=str(scores[4]);
  //
  // lines[7]=str(musicIconOn);
  //
  // lines[9]=str(soundIconOn);
  // trim(lines);
  // saveStrings(filename1, lines);
}
