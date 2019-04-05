var h, m, s, x, y;

function setup() {
  createCanvas(161, 311);
  noCursor();
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
    rect(29, height - (i * 50) - 30, 50, 50, 5);

    fill(0, 255, 0);
    if (m >= pow(2, i)) m -= pow(2, i);
    else fill(0, 176, 0);
    rect(79, height - (i * 50) - 30, 50, 50, 5);

    fill(0, 0, 255);
    if (s >= pow(2, i)) s -= pow(2, i);
    else fill(0, 0, 176);
    rect(129, height - (i * 50) - 30, 50, 50, 5);
  }
}
