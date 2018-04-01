var jsondata;

//function preload() {
//  jsondata = loadJSON("Gdynia_dzielnice.json")
//}



function setup() {
  //loadJSON("https://crossorigin.me/http://wwis.imgw.pl/pl/json/25_pl.json", gotData);
  //loadJSON('http://wwis.imgw.pl/pl/json/25_pl.json', gotData, 'jsonp');
  // var url = 'https://crossorigin.me/https://api.apixu.com/v1/current.json?key=513d8003c8b348f1a2461629162106&q=NYC';

  //var url = 'https://crossorigin.me/http://wwis.imgw.pl/pl/json/25_pl.json'
  //http://otwartedane.gdynia.pl/portal/data/city/1/2/data.json
  var url = 'https://crossorigin.me/http://otwartedane.gdynia.pl/portal/data/city/1/2/data.json'
  loadJSON(url, gotData);
  noCanvas();


//console.log(JSONdata.data.length);
}

function gotData(jsondata) {
  //print(jsondata);

  createElement ('h1', "Gdyńskie dzielnice: ");
  createElement('h3',  jsondata.meta.url);
  for( var i = 0; i < jsondata.data.length; i++)
  {
    createElement('h2', jsondata.data[i].dzielnica);
    createElement('p', "gęstość zaludnienia = " + jsondata.data[i].gestosc_zaludnienia);
    createElement('p', "liczba ludności = " + jsondata.data[i].liczba_ludnosci);
    createElement('p', "powierzchnia = " + jsondata.data[i].powierzchnia);
    createElement('p', "dane z dnia: " + jsondata.data[i].dzien);
  }
}
