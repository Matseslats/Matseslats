function enemy(){

  //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

  image(enemy1, enemy1x, enemy1y, enemyWidth, enemyHeight);

  if (enemy1x > -25){
    enemy1x -= enemySpeed;
  } else if (enemy1x < -25){
    enemy1x = 1000;
    enemy1y = random(0, 695);
    enemy1x = random(1280, 1280 + 55);
    score += 1;
    if (soundIconOn == 1){
      if (focused){
        // point.play();
      }
    }

  }
  planeHitboxX = x + 5;
  planeHitboxFastX = x + 15;
  planeHitboxY = y + 10;
  if (planeHitboxX + planeHitboxWidth-10 >= enemy1x &&    // r1 right edge past r2 left
      planeHitboxX <= enemy1x   + enemyWidth &&    // r1 left edge past r2 right
      planeHitboxY + planeHitboxHeight >= enemy1y &&    // r1 top edge past r2 bottom
      planeHitboxY <= enemy1y + enemyHeight) {    // r1 bottom edge past r2 top
    hit();
  }
  else {

  }

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

  image(enemy2, enemy2x, enemy2y, enemyWidth, enemyHeight);

  if (enemy2x > -20){
    enemy2x -= enemySpeed;
  } else if (enemy2x < -20){
    enemy2x = 1000;
    enemy2y = random(0, 695);
    enemy2x = random(1280, 1280 + 55);
    score += 1;
    if (soundIconOn == 1){
      if (focused){
        // point.play();
      }
    }

  }
  planeHitboxX = x + 5;
  planeHitboxFastX = x + 15;
  planeHitboxY = y + 10;
  if (planeHitboxX + planeHitboxWidth-10 >= enemy2x &&    // r1 right edge past r2 left
      planeHitboxX <= enemy2x   + enemyWidth &&    // r1 left edge past r2 right
      planeHitboxY + planeHitboxHeight >= enemy2y &&    // r1 top edge past r2 bottom
      planeHitboxY <= enemy2y + enemyHeight) {    // r1 bottom edge past r2 top
    hit();
  }
  else {

  }

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

  image(enemy3, enemy3x, enemy3y, enemyWidth, enemyHeight);

  if (enemy3x > -20){
    enemy3x -= enemySpeed;
  } else if (enemy3x < -20){
    enemy3x = 1000;
    enemy3y = random(0, 695);
    enemy3x = random(1280, 1280 + 55);
    score += 1;
    if (soundIconOn == 1){
      if (focused){
        // point.play();
      }
    }

  }
  planeHitboxX = x + 5;
  planeHitboxFastX = x + 15;
  planeHitboxY = y + 10;
  if (planeHitboxX + planeHitboxWidth-10 >= enemy3x &&    // r1 right edge past r2 left
      planeHitboxX <= enemy3x   + enemyWidth &&    // r1 left edge past r2 right
      planeHitboxY + planeHitboxHeight >= enemy3y &&    // r1 top edge past r2 bottom
      planeHitboxY <= enemy3y + enemyHeight) {    // r1 bottom edge past r2 top
    hit();
  }
  else {

  }
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// boolean rectRect(var planeHitboxX, var planeHitboxY, var planeHitboxWidth, var planeHitboxHeight, var enemy1x, var enemy1y, var enemyWidth, var enemyHeight) {
//
//   // are the sides of one rectangle touching the other?
//
//   if (planeHitboxX + planeHitboxWidth-10 >= enemy1x &&    // r1 right edge past r2 left
//       planeHitboxX <= enemy1x   + enemyWidth &&    // r1 left edge past r2 right
//       planeHitboxY + planeHitboxHeight >= enemy1y &&    // r1 top edge past r2 bottom
//       planeHitboxY <= enemy1y + enemyHeight) {    // r1 bottom edge past r2 top
//         return true;
//   }
//   return false;
// }
//
// boolean rectRect2(var planeHitboxX, var planeHitboxY, var planeHitboxWidth, var planeHitboxHeight, var enemy2x, var enemy2y, var enemyWidth, var enemyHeight) {
//
//   // are the sides of one rectangle touching the other?
//
//   if (planeHitboxX + planeHitboxWidth-10 >= enemy2x &&    // r1 right edge past r2 left
//       planeHitboxX <= enemy2x   + enemyWidth &&    // r1 left edge past r2 right
//       planeHitboxY + planeHitboxHeight >= enemy2y &&    // r1 top edge past r2 bottom
//       planeHitboxY <= enemy2y + enemyHeight) {    // r1 bottom edge past r2 top
//         return true;
//   }
//   return false;
// }
//
// boolean rectRect3(var planeHitboxX, var planeHitboxY, var planeHitboxWidth, var planeHitboxHeight, var enemy3x, var enemy3y, var enemyWidth, var enemyHeight) {
//
//   // are the sides of one rectangle touching the other?
//
//   if (planeHitboxX + planeHitboxWidth-10 >= enemy3x &&    // r1 right edge past r2 left
//       planeHitboxX <= enemy3x   + enemyWidth &&    // r1 left edge past r2 right
//       planeHitboxY + planeHitboxHeight >= enemy3y &&    // r1 top edge past r2 bottom
//       planeHitboxY <= enemy3y + enemyHeight) {    // r1 bottom edge past r2 top
//         return true;
//   }
//   return false;
// }

function hit(){
  // hit = 1;
  // if (score == highScore && score > 0){
  //   println(highScore);
  // }

  endScore = score;
  if(endScore > highScore) {
    highScore = endScore;
  }
  score = 0;
  hitTime = millis();
  // hit = 0;
  spawnEnemies();
}

function chechIfHit(){
  if(hitTime + 500 > millis()){
      textAlign(CENTER);
      textFont(scoreFont);
      fill(192, 232, 249);
      text("HIT!", 1280/2, 720/2);
      hitOpacity = 100;
    } else if(hitTime + 1000 > millis()){
      hitOpacity -= 1;
      textAlign(CENTER);
      textFont(scoreFont);
      fill(192, 232, 249, hitOpacity);
      text("HIT!", 1280/2, 720/2);
    } else{
      textAlign(CENTER);
    }
}

function speedOfEnemy(){
  if (score < 100){
    enemySpeed = 30;
  } else if (score < 500){
    enemySpeed = 35;
  } else if (score < 1000){
    enemySpeed = 40;
  }
}

function spawnEnemies(){
  enemy1y = random(0, 695);
  enemy1x = random(((1280/3*4)-20), ((1280/3*4)+20));
  enemy2y = random(0, 695);
  enemy2x = random(((1280/3*5)-20), ((1280/3*5)+20));
  enemy3y = random(0, 695);
  enemy3x = random(((1280/3*6)-20), ((1280/3*6)+20));
}
