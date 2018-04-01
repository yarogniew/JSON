var jsondata;

function preload() {
  jsondata = loadJSON("Gdynia_dzielnice.json")
}

// function gotData(jsondata) {
//   console.log(jsondata);
// }


function setup() {
    //loadJSON("http://otwartedane.gdynia.pl/portal/data/city/1/2/data.json", gotData, 'jsonp');
  // create canvas
  //createCanvas(710, 400);
  noCanvas();
  createElement ('h1', "Gdyńskie dzielnice: ");
  createElement('h3',  jsondata.meta.url);

  for( var i = 0; i < jsondata.data.length; i++){
  //var prime = mainData.data.dzielnica[7];
  //createP(prime);

  createElement('h2', jsondata.data[i].dzielnica);
  createElement('p', "gęstość zaludnienia = " + jsondata.data[i].gestosc_zaludnienia);
  createElement('p', "liczba ludności = " + jsondata.data[i].liczba_ludnosci);
  createElement('p', "powierzchnia = " + jsondata.data[i].powierzchnia);
  createElement('p', "dane z dnia: " + jsondata.data[i].dzien);
  }

//console.log(JSONdata.data.length);
}
