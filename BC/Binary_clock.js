var h, m, s, x, y, w;

function setup() {
  w = 50;
  createCanvas(w*3, w*6);
  frameRate(20);
  // noCursor();
  strokeWeight(2);
}

function draw() {
  background(0);
  h = hour();
  m = minute();
  s = second();
  LED();
}

function LED() {
  rectMode(CENTER);
  for (let i = 5; i >= 0; i--) {
    fill(255, 0, 0);
    if (h >= pow(2, i)) h -= pow(2, i);
    else fill(176, 0, 0);
    rect(w/2, height - (i * w) - w/2, w, w, w/10);

    fill(0, 255, 0);
    if (m >= pow(2, i)) m -= pow(2, i);
    else fill(0, 176, 0);
    rect(w*1.5, height - (i * w) - w/2, w, w, w/10);

    fill(0, 0, 255);
    if (s >= pow(2, i)) s -= pow(2, i);
    else fill(0, 0, 176);
    rect(w*2.5, height - (i * w) - w/2, w, w, w/10);
  }
}
