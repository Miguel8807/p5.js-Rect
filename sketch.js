//rect
let xrect = 2
let yrect = 110
let base = 7
let heightrect = 90

//rect2
let xrect2 = 490
let yrect2 = 110
let base2 = 7
let heightrect2 = 90

//ball
let xball = 200 
let yball = 150
let diameter = 20
let ray = diameter /2;

//speed ball
let speedxball = 5
let speedyball = 5

function setup() {
  createCanvas(500, 300);
}

function draw() {
  background('#23238E');
  showball();
  ballmovement();
  checkedgecolision();
  showrect();
  showrect2();
  rectmovement();
  rectmovement2();
}

function rectmovement(){
  if(keyIsDown(UP_ARROW))
    yrect -= 10
  if(keyIsDown(DOWN_ARROW))
    yrect += 10
}

function rectmovement2(){
  if(keyIsDown(TAB))
    yrect2 -= 10
  if(keyIsDown(SGIFT))
    yrect2 += 10
}

function showrect(){
  rect(xrect, yrect, base, heightrect)
}

  function showrect2(){
  rect(xrect2, yrect2, base2, heightrect2)
}

function showball(){
  circle(xball, yball, diameter);
}

function ballmovement(){
  xball += speedxball;
  yball += speedyball;
}
  
function checkedgecolision(){
  if(xball +15 > width || xball -15 < 0){
    speedxball *= -1;
}


  if(yball +15 > height || yball -15 < 0){
    speedyball *= -1
  }
}
