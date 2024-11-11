function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(200);
  
  for (let d = 700; d > 0; d -= 20) {
    circle(250, 250, d);
    x = random(255);
    fill(x);
  }
  text("🗿", 242, 254);
}