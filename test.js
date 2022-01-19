  //Fredirck De Blessler
let table;
let index = 0;
let dx;
let indicator = 1;
 
function preload() {
  table = loadTable('data.csv', 'csv', 'header');
}

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
  background(220);
  textAlign(CENTER);
  dx = width / 8;
}

function draw() {
  background('Gainsboro')
  fill('white')
  stroke('black')
  textSize(20)
  textSize(15)
  text('Red is the max temp of the day, green is the average temp of that day, ', width/2, 60)
  textSize(15)
  text(' yellow is the lowest temp of that day', width/2, 80)
  const startDate = table.getString(index,'date');
  const endDate = table.getString(index+6,'date');
  // const startYear = table.getString(index,'record_max_temp_year');
  // const endYear = table.getString(index+6,'record_max_temp_year');
  text( `data for the week from ${startDate}-${endDate}`,width/2,height/10);
  // text(`data for the record temp year ${startYear}-${endYear}`,width/2, height/10)
  drawWeek(index);
  noLoop();
}

function keyPressed() {
  if (key === '=') {
  index += 7;
  redraw();
  }
   if (key === '-') {
  index -= 7;
  redraw();
  }
   if (key === '1') {
  indicator = 0;
  redraw();
  }
if (key === '2') {
  indicator = 1;
   redraw();
  }
}

function drawWeek(startingRow) {
  //Mr Oswald took it from a bunch of different loops to function drawWeek
  if (indicator == 0) {
  for (let i = 0; i < 7; i++) {
    const recordMin = table.getNum(startingRow + i, 'record_min_temp');
    const recordMax = table.getNum(startingRow + i, 'record_max_temp');
    const actual_mean_temp = table.getNum(startingRow + i, 'actual_mean_temp');
    const actual_max_temp = table.getNum(startingRow + i, 'actual_max_temp');    
    const actual_min_temp = table.getNum(startingRow + i, 'actual_min_temp');        

    const x = (i + 1) * dx;
    let y = map(actual_mean_temp, recordMin, recordMax, height-50, 100);
    // Fredirck De Blessler and down
    let size = map(actual_mean_temp / 2, 0, 28, 0, 10);
    let fillColor = map(actual_mean_temp, recordMin, recordMax, 0, 255)
    fill (1,fillColor,50)
    
    circle(x, y, actual_mean_temp / 4)
    fill(0)
    text(actual_mean_temp, x, y + size / 2 + 20)
    
    y = map(actual_max_temp, recordMin, recordMax, height-50, 100);
     size = map(actual_max_temp/2, 0, 28, 0, 10)
     fillColor = map(actual_max_temp, 256,0 ,0, 255)
     fill(fillColor, 1, 50)
     circle(x,y, actual_max_temp/4)
     fill(0)
     text(actual_max_temp,x,y+ size/2+20)
    
    y = map(actual_min_temp, recordMin, recordMax, height-50, 100);
     size = map(actual_min_temp/2, 0, 28, 0, 10)
     fillColor = map(actual_min_temp, 0,0 ,256, 0)
     fill (250,250,fillColor)
     circle(x,y, actual_min_temp/4)
     fill(0)
     text(actual_min_temp,x,y+ size/2+20)

     text(recordMax,x,100);
     text(recordMin,x,height);
  }
  }

  if (indicator == 1) {
    fill('Gainsboro');
    rect(0,0, 10000,10000);
    fill('white');
    textSize(20);
    text('some extra data',width/2,height/13);
  for (let i = 0; i < 7; i++) {
    const recordMin = table.getNum(startingRow + i, 'record_min_temp_year');
    const recordMax = table.getNum(startingRow + i, 'record_max_temp_year');
    const actual_mean_temp = table.getNum(startingRow + i, 'actual_mean_temp');
    const actual_max_temp = table.getNum(startingRow + i, 'actual_max_temp');    
    const actual_min_temp = table.getNum(startingRow + i, 'actual_min_temp');        

    const x = (i + 1) * dx;
    let y = map(actual_mean_temp, recordMin, recordMax, height-50, 100);
    // Fredirck De Blessler and down
    let size = map(actual_mean_temp / 2, 0, 28, 0, 10);
    let fillColor = map(actual_mean_temp, recordMin, recordMax, 0, 255)
    fill (1,fillColor,50)
    
    circle(x, y, actual_mean_temp / 4)
    fill(0)
    text(actual_mean_temp, x, y + size / 2 + 20)
    
    y = map(actual_max_temp, recordMin, recordMax, height-50, 100);
     size = map(actual_max_temp/2, 0, 28, 0, 10)
     fillColor = map(actual_max_temp, 256,0 ,0, 255)
     fill(fillColor, 1, 50)
     circle(x,y, actual_max_temp/4)
     fill(0)
     text(actual_max_temp,x,y+ size/2+20)
    
    y = map(actual_min_temp, recordMin, recordMax, height-50, 100);
     size = map(actual_min_temp/2, 0, 28, 0, 10)
     fillColor = map(actual_min_temp, 0,0 ,256, 0)
     fill (250,250,fillColor)
     circle(x,y, actual_min_temp/4)
     fill(0)
     text(actual_min_temp,x,y+ size/2+20)

     text(recordMax,x,100);
     text(recordMin,x,height);
fill('white')
     text('top is the year of the maximum temp for that day',width/2, height/2)
     text('bottom is the year of the minimum temp for that day',width/2, height/1.5)


    
    
    
  }
}
  }

