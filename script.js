function setup() {
  createCanvas(windowWidth, windowHeight)
  osc = new p5.Oscillator('sine')
  osc.start()
  osc.amp(0)
}

function draw() {
      
}

function mouseMoved() {
  
}

function mousePressed() {
  /* if (dist(mouseX, mouseY, c1.x, c1.y) < c1.size / 2) {
    c1.locked = false
  } */
  
  osc.amp(0.3, 0.5)
  osc.freq(mouseX)
}

function mouseDragged() {
 /*  if (!c1.locked && mouseY > 100 && mouseY < windowHeight - 100) {
    c1.y = mouseY
    c1.color = 75
  } */
  fill(0)
  ellipse(mouseX, mouseY, 40, 40)
  osc.freq(mouseX)
}

function mouseReleased() {
  /* c1.color = 0
  c1.locked = true */
  osc.amp(0, 0.5)
}