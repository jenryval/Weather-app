var api = "c87dbd6058cc5e50e8f69c46a3447ae6"
var queryURL = "https://api.openweathermap.org/data/2.5/weather?"

var searchBox = document.querySelector(".search-box")

searchBox.addEventListener("keypress" , submit)

function submit(event){ 
    if (event.keyCode == 13) {
        // console.log(searchBox.value)
        getResults(searchBox.value)
    }
}

function getResults(){
  
}