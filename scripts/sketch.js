
var canvas;
var labels= ["name", "week 1", "week 2", "week 3"];
var tester= ["David", 0,0,0];
var textGrid= [labels, tester];

class Grid{
  constructor (){
    this.grid=[];

    for (var i = 0; i < 6; i++){
      for (var j=0; j<4; j++){
        fill(255, 255, 255);
        // rectMode(CENTER); center the single digit numbers later!!
        var gridChecks = new Box(75+j*200, 200+i*75, 200, 75);
        this.grid.push(gridChecks);
      }

    }
  }

}

class Box{
  constructor(x, y, width, height){
    this.x= x;
    this.y= y;
    this.width= width;
    this.height=height;
    fill(255, 255, 255);
    rect(x,y,width, height);
  }

  getWidth(){
    return this.width;
  }
  getHeight(){
    return this.height;
  }

}


// function setup() {
//   canvas = createCanvas(window.innerWidth, window.innerHeight);
//
// }
//
// function draw() {
//   background(0,50,98);
//   fill(255);
//
//   fill(255, 255, 255);
//   textSize(60);
//   text('attendeaux', window.innerWidth *.1 , 80);
//
//   grid= new Grid();
//
//   for (var i = 0; i < 6; i++){
//     for (var j=0; j<4; j++){
//       fill(0, 0, 0);
//       if (i==0){
//         textSize(30);
//       }
//       else{
//         textSize(20);
//       }
//
//       text(textGrid[i][j], 77.5+ 200*j , 255+ 75*i);
//     }
//
//   }


}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.size(w,h);
  width = w;
  height = h;
}
