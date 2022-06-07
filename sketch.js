// ******* Paste!! p5.js editor code __before function draw content
let yoff = 0.0; // 2nd dimension of perlin noise

function setup() {
  createCanvas(710, 400);
}

function draw() {

// *** END *** p5.js editor code __before function draw content


  //　CCapure's setting__from here.
  //https://note.com/ynsnkm/n/nce5f2bb33086 Reference Articles
  if(frameCount == 1){
    capturer.start();
  }
  // END !!! CCapure's setting.

  //****** Paste!!  p5.js editor code_function draw content */
  background(51);

  fill(255);
  // We are going to draw a polygon out of the wave points
  beginShape();

  let xoff = 0; // Option #1: 2D Noise
  // let xoff = yoff; // Option #2: 1D Noise

  // Iterate over horizontal pixels
  for (let x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise, map to

    // Option #1: 2D Noise
    let y = map(noise(xoff, yoff), 0, 1, 200, 300);

    // Option #2: 1D Noise
    // let y = map(noise(xoff), 0, 1, 200,300);

    // Set the vertex
    vertex(x, y);
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

  //*** END **** p5.js editor code 

  //CCapure's setting___from here.
  //https://note.com/ynsnkm/n/nce5f2bb33086 Reference Articles
  if (frameCount < 60*4){　//4秒後Captureを停止する
   capturer.capture(canvas);

 }else if(frameCount == 60*4){

   capturer.save();
   capturer.stop();
 }
}
