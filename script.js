console.log("linked")
var requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=London&appid=2ac30b0842ba2d3340555a86403c9a45";
var submitButton = document.querySelector(".fa-search");
var cityName = $(".citySearched").val();

console.log(cityname)
console.log(submitButton)
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
function getApi(){
    cityUrl = requestUrl + 
    fetch(citytUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
    };
function displayWeather(event){
    event.preventDefault();
    console.log("button works");
}

submitButton.addEventListener('click', displayWeather);