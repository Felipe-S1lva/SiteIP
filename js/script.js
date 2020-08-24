var h2 = document.querySelector('h2');
var bio = document.querySelector('.bio');
var cid = document.querySelector('#city')
var est = document.querySelector('#region_code')
var cp = document.querySelector('#cep')
var p = document.querySelector('#country_name')
var end = document.querySelector('#endereco')
var prov = document.querySelector('#provedor')
var lat  = document.querySelector('#latitude')
var long = document.querySelector('#longitude')
var botaoPesquisar = document.querySelector('[type$="submit"]')
var form = document.querySelector('form')
var query = document.querySelector('#query')

function buscarLocalização(){
fetch(`https://freegeoip.app/json/`)

.then(function(response) {
    return response.json();
})
.then(function(dados) {
   console.log(dados);
   let CEP = JSON.stringify(dados.zip_code)
   cep.innerHTML = "CEP: " + CEP;
   let SIGLA = JSON.stringify(dados.region_code)
   estado.innerHTML = "Estado: " + SIGLA;
   let SIGLAPAIS =  JSON.stringify(dados.country_code)
   pais.innerHTML = "País: " + SIGLAPAIS;
   let ENDER = JSON.stringify(dados.ip)
   endereco.innerHTML = "Endereço IP: " + ENDER;
   var LATI = JSON.stringify(dados.latitude)
   var LONGI = JSON.stringify(dados.longitude)
   latitude.innerHTML = "Latitude: " + LATI;
   longitude.innerHTML = "Longitude: " + LONGI;
   
})

}

form.addEventListener('submit', function(evt){
    evt.preventDefault();
    buscarLocalização(botao.value);
})