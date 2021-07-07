console.log("linked")
// var requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=London&appid=2ac30b0842ba2d3340555a86403c9a45";
var requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
var forecastUrl = "http://api.openweathermap.org/data/2.5/forecast?q=";
var submitButton = document.querySelector(".searchBtn");
var citySearch = $('#citySearched');
var currentDay = document.querySelector(".currentDay");
var forecast = document.querySelector(".forecast");
var diplayEl = $('#result');

function getApi(cityName){

  //  container.reset();
     var cityUrl = requestUrl + cityName + "&appid=2ac30b0842ba2d3340555a86403c9a45"
    fetch(cityUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    // var divEl = document.createElement('div');
    var h5El = document.createElement("h5");
    var listEl = document.createElement("ol");
    var tempEl = document.createElement("li");
    var humidityEl = document.createElement("li");
    var windSpeedEl = document.createElement("li");
    var UVIndexEl = document.createElement("li");
    var iconImageEl = document.createElement("img");
    iconImageEl.src = "http://openweathermap.org/img/wn/"+ data.weather[0].icon + "@2x.png";
    
    h5El.textContent = cityName +" "+ data.dt+ " " +iconImageEl;
    listEl.textContent = "";
    tempEl.textContent = "Temperature: "+ data.main.temp;
    humidityEl.textContent = "Humidity: "+ data.main.humidity;
    windSpeedEl.textContent = "Wind Speed: "+ data.wind.speed;
    UVIndexEl.textContent = "UV Index: "+ data.clouds.all;


    currentDay.appendChild(h5El);
    h5El.appendChild(listEl);
    listEl.appendChild(tempEl);
    listEl.appendChild(humidityEl);
    listEl.appendChild(windSpeedEl);
    listEl.appendChild(UVIndexEl);
     var forecastCityUrl = forecastUrl+ cityName+"&appid=2ac30b0842ba2d3340555a86403c9a45";
     fetch(forecastCityUrl).then(function (response) {
      console.log("made it");
      return response.json();
      
    }).then(function (forecastData) {
      console.log(forecastData);
      console.log(forecastData.list.length);
      for(var i =0;i<5;i++){

        console.log(forecastData)
        console.log(forecastData.list[i].main.temp)
        // var divEl = document.createElement('div');
        var divforCol = document.createElement('div');
        divforCol.setAttribute("style","background-color:light-blue;")
        var h5El = document.createElement("h5");
        var listEl = document.createElement("ol");
        var tempEl = document.createElement("li");
        var humidityEl = document.createElement("li");
        // divEl.classList.add('row');
        divforCol.classList.add('col');

        h5El.textContent = cityName;
        listEl.textContent = "";
        tempEl.textContent = "Temperature: "+ forecastData.list[i].main.temp;
        humidityEl.textContent = "Humidity: "+ forecastData.list[i].main.humidity;

        // currentDay.appendChild(divEl);
        forecast.appendChild(divforCol);
        divforCol.appendChild(h5El);
        h5El.appendChild(listEl);
        listEl.appendChild(tempEl);
        listEl.appendChild(humidityEl);
    
        
      }

    });
  
    });
};
function getCity(event){
    event.preventDefault();
    var cityS = citySearch.val();
    console.log(cityS);
    getApi(cityS);
   displayEl.reset();
    
};

 submitButton.addEventListener('click', getCity);
