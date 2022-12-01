// global variables
// div on html
let searchBtn = document.querySelector("#searchBtn");
let requestUrl = [];

//functions
function init() {
  //grab last search results from local storage and place on left side of page
}
let weather = {
  fetchWeather: function (city) {
    let requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=f30ccb78a681804fbfff4e5128eff799`;
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then((data) => this.displayWeather(data));
      console.log(city)
  },

  displayWeather: function (data) {
    let name = data;
    let description = data.list[0].weather[0].description;
    let temp = data.list[0].main.temp;
    let humidity = data.list[0].main.humidity;
    let speed  = data.list[0].wind.speed;
    console.log(name, description, temp, humidity, speed);
    

    document.querySelector(".city").innerText = name;
    //document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temperature").innerText = temp + "°F";
    document.querySelector(".humidity").innerText = "humidity: " + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + " mph";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    weather.search();
  }
});

// // function requestCity() {
//   // set assign variable to value of textbox on html page
//   console.log();
//   let city = "Chicago";
//   console.log();
//   let requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=f30ccb78a681804fbfff4e5128eff799`;
//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//       console.log(response);
//     })
//     .then(function (data) {
//       // code goes here
//       //chicago
//       console.log(data);

//       data.city.forEach((cityname) => {
//         let titleEl = document.createElement("h3");
//         titleEl.innerHTML = cityname.name;
//       });
//       data.list.forEach((weather) => {
//         let listEl = document.createElement("li");
//         listEl.innerHTML = weather.main;
//         console.log(weather);
//       });
//       // chicago
//       // temp, wind, and humidity goes here
//     });
// }

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
//init();

//searchBtn.addEventListener("click", searchCity);
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
