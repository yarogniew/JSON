var jsondata;

function preload() {
  jsondata = loadJSON("Zakaz_handlu_2018.json")
}

// function gotData(jsondata) {
//   console.log(jsondata);
// }


function setup() {
  console.log(jsondata);
    //loadJSON("http://otwartedane.gdynia.pl/portal/data/city/1/2/data.json", gotData, 'jsonp');
  // create canvas
  //createCanvas(710, 400);
  noCanvas();
  createElement ('p', "Sklepy zamknięte w roku: ");
  createElement('h1',  jsondata.meta.rok);

  for( var i = 0; i < jsondata.data.length; i++){
  //var prime = mainData.data.dzielnica[7];
  //createP(prime);

  createElement('h4', jsondata.data[i].miesiac);
  for( var j = 0; j < jsondata.data[i].dzien.length; j++){
    createElement('div', jsondata.data[i].dzien[j]);
  }
  // createElement('p', "dzień = " + jsondata.data[i].gestosc_zaludnienia);
  // createElement('p', "liczba ludności = " + jsondata.data[i].liczba_ludnosci);
  // createElement('p', "powierzchnia = " + jsondata.data[i].powierzchnia);
  // createElement('p', "dane z dnia: " + jsondata.data[i].dzien);
  }

//console.log(JSONdata.data.length);
}
