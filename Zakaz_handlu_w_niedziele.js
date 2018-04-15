var jsondata;
var button, input;

function preload() {
  jsondata = loadJSON("Zakaz_handlu_2018.json")
}

// function gotData(jsondata) {
//   console.log(jsondata);
// }


function setup() {
  //console.log(jsondata);
  //createCanvas(710, 400);
  noCanvas();
  button = createButton("wyświetl dane");
  button.mousePressed(wyswietlDane);
  }

//console.log(JSONdata.data.length);


function wyswietlDane(){

createElement ('p', "Sklepy zamknięte w roku: ");
createElement('h1',  jsondata.meta.rok);

for( var i = 0; i < jsondata.data.length; i++){
createElement('div', jsondata.data[i].miesiac);
for( var j = 0; j < jsondata.data[i].dzien.length; j++){
  createElement('div', jsondata.data[i].dzien[j]);
  }
}
}
