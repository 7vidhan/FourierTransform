x = []
y = [];
let fourierY;
let fourierX;
let time=0;
let path = [];

let n = 3;

function setup() {
  createCanvas(900, 600);
  const skip = 2;
  let angle = 0;
  for(let j=0; j<1; j++){
    for(let i=allContours[j].length - 1; i>=0; i -= skip){
      angle = map(i,0,500,0,TWO_PI);
      x.push(allContours[j][i][0])/1;
      y.push(allContours[j][i][1])/1;
    }
  }

  fourierX = dft(x);
  fourierY = dft(y);
}

function epiCycles(x, y, rotation, fourier){
  for(let i=0; i<fourier.length; i++){
    let prevx = x;
    let prevy = y;

    let freq = fourier[i].freq;
    let radius = 0.5*fourier[i].amplitude;
    let phase = fourier[i].phase;
    x += radius * cos(freq*time + phase + rotation);
    y += radius * sin(freq*time + phase + rotation);

    stroke(0,0,255, 100);
    noFill();
    ellipse(prevx, prevy, radius);
    stroke(0,255,0, 100);
    line(prevx,prevy,x,y);
  }

  return createVector(x,y);
}

function draw() {
  background(0);

  let vx = epiCycles(300, 100, 0, fourierX);
  let vy = epiCycles(90, 250, HALF_PI, fourierY);
  let v = createVector(vx.x, vy.y);
  
  path.unshift(v);
  line(vx.x, vx.y, v.x, v.y);
  line(vy.x, vy.y, v.x, v.y);

  beginShape();
  stroke(255,0,0);
  for(let i=0; i < path.length; i++){
    vertex(path[i].x, path[i].y);
  }
  endShape();
  const dt = TWO_PI / fourierY.length;
  time += dt;

  if(path.length > 385) path.pop();
}
