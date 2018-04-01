var data;

function preload() {
  data = loadJSON("prime.json")
}


function setup() {
  // create canvas
  //createCanvas(710, 400);
  noCanvas();
  for( var i = 988; i < data.primes.length; i++){
  var prime = data.primes[i];
  //createP(prime);
  createElement('p', data.primes[i]);
  }
console.log(data.primes.length);
}

function draw(){
}
