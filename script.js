// var for API keys and URL
var apiKey = "dc2e669487d07ea7849905a5a053b159";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=";

var searchBox = document.querySelector(".search-box")

// event lisener for enter button
searchBox.addEventListener("keypress" , submit)
function submit(event){ 
    if (event.keyCode == 13) {
        console.log(searchBox.value)
        // getResults(searchBox.value)
    }
}


function getResults(query){
fetch(queryURL + query + "&units=metric&appid" + apiKey)
  .then(weather =>{
      return weather.json();
  }).then(display);
}

function display(weather){
    console.log(weather)
}