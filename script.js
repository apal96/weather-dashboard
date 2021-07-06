console.log("linked")
// var requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=London&appid=2ac30b0842ba2d3340555a86403c9a45";
var requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
var submitButton = document.querySelector(".searchBtn");
var cS = $('#citySearched');


function getApi(cityName){
     var cityUrl = requestUrl + cityName + "&appid=2ac30b0842ba2d3340555a86403c9a45"
    fetch(cityUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
};
function displayWeather(event){
    event.preventDefault();
    var cityS = cS.val();
    console.log(cityS);
    getApi(cityS);
    console.log("button works");
};

 submitButton.addEventListener('click', displayWeather);
