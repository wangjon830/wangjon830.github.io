let mobilenet;
let image1;

function modelReady() {
  mobilenet.predict(image1, gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    fill(0);
    textSize(64);
    document.getElementById('data').innerHTML = "";
    for (var i = 0; i < results.length; i++) {
        document.getElementById('data').innerHTML += ("Guess: " + results[i].className + "<br/>" + "Certainty: " + (Math.round(results[i].probability * 10000) / 100) +  "% Match" + "<br/>" + "<br/>");
    }
  }
}

function imageReady() {
  image(image1, 0, 0, width, height);
}

function setup() {
   var myCanvas = createCanvas(640, 600);
    background(51);
    myCanvas.parent("sketch-holder");
  myCanvas.drop(gotFile);
    
  var uploadBtn = createFileInput(gotFile);
  uploadBtn.parent("dropzone")
}
function gotFile(file) {
if(file.type == 'image') {
  image1 = createImg(file.data, imageReady);
  image1.hide();
  background(0);
  mobilenet = ml5.imageClassifier('MobileNet', modelReady);
}
}
