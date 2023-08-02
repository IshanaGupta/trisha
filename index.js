function setup(){
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
}

function preload(){
    classifier = ml5.imageClassifier('DoodleNet');
}



function clearCanvas() {
    background("white");
}



function draw(){
  strokeWeight(13);
  color(orange)

  stroke(0);

  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}


function classifiyCanvas(){
    classifier.classifiy(canvas, gotResult);
}


function save(){
    save('my_arts.png')
}