let mobilenet;
let video;
let label = '';

function modelReady() {
  mobilenet.predict(gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    label = results[0].className;   document.getElementById('data').innerHTML = "";
        document.getElementById('data').innerHTML += ("Guess: " + results[0].className + "<br/>" + "Certainty: " + (Math.round(results[0].probability * 10000) / 100) +  "% Match" + "<br/>" + "<br/>");
    mobilenet.predict(gotResults);

  }
}


function setup() {
   var myCanvas = createCanvas(640, 600);
    background(51);
    myCanvas.parent("sketch-holder");
  video = createCapture(VIDEO);
  video.hide();
  background(0);
  mobilenet = ml5.imageClassifier('MobileNet', video, modelReady);
}

function draw() {
  background(0);
  image(video, 0, 0);
  fill(255);
  textSize(32);
  text(label, 10, height - 20);
}