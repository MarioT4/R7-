  //Fredirck De Blessler
let table;
let index = 0;
let dx;
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
  background(220)
  fill('white')
  stroke('black')
  textSize(20)
  textSize(15)
  text('Red is the max temp of the day, green is the average temp of that day, ', width/2, 60)
  textSize(15)
  text(' yellow is the lowest temp of that day', width/2, 80)
  const startDate = table.getString(index,'date');
  const endDate = table.getString(index+6,'date');
  text( `data for the week from ${startDate}-${endDate}`,width/2,height/10);
  drawWeek(index);
  noLoop();
}

function keyPressed() {
  index += 7;
  redraw();
}

function drawWeek(startingRow) {
  //Mr Oswald took it from a bunch of different loops to function drawWeek
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
  //  for (let u = startingRow; u < startingRow + 7; u++) {
  //    const name = table.getString(u, 'actual_max_temp');
  //    const actual_max_temp = table.getNum(u, 'actual_max_temp');
  //     const x =  random(20, 520);
  //    const y = random(100,370);
  //    const size = map(actual_max_temp/2, 0, 28, 0, 10)
  //    const fillColor = map(actual_max_temp, 256,0 ,0, 255)
  //    fill (fillColor,1,50)
  //    circle(x,y, actual_max_temp/4)
  //    fill(0)
  //    text(name,x,y+ size/2+20)
  //  }
  //  for (let o = 0; o < table.getRowCount(); o++) {
  //    const name = table.getString(o, 'actual_min_temp');
  //    const actual_min_temp = table.getNum(o, 'actual_min_temp');
  //     const x =  random(20, 520);
  //    const y = random(100,370);
  //    const size = map(actual_min_temp/2, 0, 28, 0, 10)
  //    const fillColor = map(actual_min_temp, 0,0 ,256, 0)
  //    fill (fillColor,250,250)
  //    circle(x,y, actual_min_temp/4)
  //    fill(0)
  //    text(name,x,y+ size/2+20)
  //  }
  //  for (let p = 0; p < table.getRowCount(); p++) {
  //    const name = table.getString(p, 'record_min_temp');
  //    const record_min_temp= table.getNum(p, 'record_min_temp');
  //     const x =  random(20, 520);
  //    const y = random(100, 370);
  //    const size = map(record_min_temp/2, 0, 28, 0, 10)
  //    const fillColor = map(record_min_temp, 0,0 ,256, 0)
  //    fill (fillColor,250,0)
  //    circle(x,y, record_min_temp/4)
  //    fill(0)
  //    text(name,x,y+ size/2+20)
  //  }
  //  for (let t = 0; t < table.getRowCount(); t++) {
  //    const name = table.getString(t, 'record_max_temp');
  //    const record_max_temp= table.getNum(t, 'record_max_temp');
  //     const x =  random(20, 520);
  //    const y = random(100, 370);
  //    const size = map(record_max_temp/2, 0, 28, 0, 10)
  //    const fillColor = map(record_max_temp, 0,0 ,201, 0)
  //    fill (fillColor,200,0)
  //    circle(x,y, record_max_temp/4)
  //    fill(0)
  //    text(name,x,y+ size/2+20)
  //  }  
}
