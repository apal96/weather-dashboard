console.log("linked")
var requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=London&appid=78b04b3048888eaabe976027c3163509";
var submitButton = document.querySelector(".fa-search");



console.log(submitButton)

function getApi(){
    // var cityUrl = requestUrl 
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
    };
function displayWeather(event){
    event.preventDefault();
    var cityName = $(".citySearched").val();
    console.log(cityName);
    console.log("button works");
    getApi();
}

submitButton.addEventListener('click', displayWeather);
