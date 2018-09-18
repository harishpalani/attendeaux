
var canvas;
var labels= ["name", "week 1", "week 2", "week 3"];

class Grid{
  constructor (){
    this.grid=[];
    for (var i = 0; i < 4; i++){
      fill(255, 255, 255);
      var gridChecks = new Box(i, 75+i*200, 200, 200, 75);
      this.grid.push(gridChecks);
    }
  }

}

class Box{
  constructor(index, x, y, width, height){
    this.index=index;
    this.x= x;
    this.y= y;
    this.width= width;
    this.height=height;
    fill(255, 255, 255);
    rect(x,y,width, height);
  }

  get_boxNum(){
    return this.index;
  }

  get_boxDim(){
    return [this.width, this.height];
  }
  get_boxCoord(){
    return [this.x,this.y];
  }

}


function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);

}

function draw() {
  background(0,50,98);
  fill(255);

  fill(255, 255, 255);
  textSize(60);
  text('attendeaux', window.innerWidth *.1 , 80);

  grid= new Grid();


  for (var i = 0; i < 4; i=i+1){
    //fill(255, 255, 255);
    // rectMode(CENTER); center the single digit numbers later!!
    //rect(75+i*75, 200, 75, 75);
    fill(0, 0, 0);
    textSize(30);
    text(labels[i], 77.5+ 200*i , 255);
  }


}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.size(w,h);
  width = w;
  height = h;
}

function createNums(){
  var nums= [];
  for (var i=0; i<12; i=i+1){
    nums.push(int(random()*100));
  }
  return nums;
}
