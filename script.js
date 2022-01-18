let colorlist = ['gold', 'yellow', 'turquoise', 'red']
let data;
let maxTemp = -Infinity;
let a = 'actual_max_temp'
let b = 'actual_min_temp'
let index = 0;
// https://p5js.org/reference/#/p5/loadTable
function preload() {
  // https://github.com/fivethirtyeight/data/tree/master/us-weather-history
  data = loadTable('https://raw.githubusercontent.com/fivethirtyeight/data/master/us-weather-history/KPHL.csv','csv','header');
}

function setup() {
  createCanvas(windowWidth-20, windowHeight-20);
  background(255);
  ellipseMode(RADIUS);
  // Option A
  maxTemp = data.getColumn(a).reduce( (maxT,cur) => {return max(maxT,cur)} );
  // Option B
  // for( let value of values ) {
  //   maxPrecip = max(value, maxPrecip);
  // }
  // Option C
  // let values = data.getColumn('actual_precipitation');
  // for( let i = 0; i < values.length; i++ ) {
  //   if( values[i] > maxPrecip ) {
  //     maxPrecip = values[i];
  //   }
  // }
}

function draw() {
  noStroke();
  textSize(6);
  let dx = width/(data.getRowCount());
  let baseLine = 0.93*height;
  for( let i = 0; i < data.getRowCount(); i++ ) {
    const row = data.getRow(i);
    let value = map( float(row.get(a)), 0, maxTemp, 0, 0.9*height);
    const x = i*dx;
    fill('red');
     rect(x,height-0.1*height-value,dx,value);
    fill('black');
    push();
    translate(x,0.9*height);
    rotate(7/4*PI);
     text(row.get('date'),0,0);
    pop()
  }
  noLoop();
}

function keyPressed() {
if(key === "1") {
  a=b
}
}


