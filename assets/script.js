// global variables
// div on html
let searchBtn = document.querySelector("#searchBtn");
let requestUrl = [];
let searchCity = document.querySelector("#searchCity");
let searchInput = document.querySelector("#div-city");
let cityTemp = document.querySelector("$temp");
let cityHumidity = document.querySelector("$humidity");
let cityDscrptn = document.querySelector("$description");
let cityWind = document.querySelector("$wind");



//functions
function init() {
  //grab last search results from local storage and place on left side of page
}

function requestCity() {
  // set assign variable to value of textbox on html page
  console.log();
  let city = "Chicago";
  console.log();
  let requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=d37ae3d48dcfb1d283849a04c6912cd3`;
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
      console.log(response);
    })
    .then(function (data) {
      // code goes here
      //chicago
      console.log(data);

      data.city.forEach((cityname) => {
        let titleEl = document.createElement("h3");
        titleEl.innerHTML = cityname.name;
      });
      data.list.forEach((weather) => {
        let listEl = document.createElement("li");
        listEl.innerHTML = weather.main;
        console.log(weather);
      });
      // chicago
      // temp, wind, and humidity goes here
    });
}

//*function search() { //TODO:remove bracket
//alert("hi");
//let requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Chicago&appid=517f19dc586407c39701b016a6edf914';
//fetch(requestUrl)
// .then(function (response) {
//   return response.json();
//  })
// .then(function (data) {});
//}
//Code for chicago goes here ok?
//chicago
//temp wind humidity
//5 day forecast

//function calls
// event listeners
init();

searchBtn.addEventListener("click", requestCity);
//search button event listener

//click on past results search buttons

//GIVEN a weather dashboard with form inputs
//WHEN I search for a city
//THEN I am presented with current and future conditions for that city and that city is added to the search history
//WHEN I view current weather conditions for that city
//THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
//WHEN I view future weather conditions for that city
//THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
//WHEN I click on a city in the search history
//THEN I am again presented with current and future conditions for that city
