console.log("linked")
// var requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=London&appid=2ac30b0842ba2d3340555a86403c9a45";
var requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
var submitButton = document.querySelector(".searchBtn");
var citySearch = $('#citySearched');
var currentDay = document.querySelector(".currentDay");

function getApi(cityName){
     var cityUrl = requestUrl + cityName + "&appid=2ac30b0842ba2d3340555a86403c9a45"
    fetch(cityUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    //   var currentDayTemp = data.main.temp;
    //   var listEl = $('<li>');
    //   listEl = "Hello";
    //   listEl.append();
    //  console.log(currentDayTemp)
    var h5El = document.createElement("h5");
    var listEl = document.createElement("ol");
    var tempEl = document.createElement("li");
    var humidityEl = document.createElement("li");
    var windSpeedEl = document.createElement("li");
    var UVIndexEl = document.createElement("li");
  
    h5El.textContent = cityName;
    listEl.textContent = "";
    tempEl.textContent = "Temperature: "+ data.main.temp;
    humidityEl.textContent = "Humidity: "+ data.main.humidity;
    windSpeedEl.textContent = "Wind Speed: "+ data.wind.speed;
    UVIndexEl.textContent = "UV Index: "+ data.clouds.all;
    console.log(tempEl)
    currentDay.appendChild(h5El);
    h5El.appendChild(listEl);
    listEl.appendChild(tempEl);
    listEl.appendChild(humidityEl);
    listEl.appendChild(windSpeedEl);
    listEl.appendChild(UVIndexEl);

    });
};
function getCity(event){
    event.preventDefault();
    var cityS = citySearch.val();
    console.log(cityS);
    getApi(cityS);
    
   
    
};

 submitButton.addEventListener('click', getCity);
