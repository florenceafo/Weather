const key = "f706430bae10de65bf9eacb0eeb77df9";
var showCity = document.getElementById("city");
function getWeather() {
    navigator.geolocation.getCurrentPosition(function(position) {
        var lat = Math.round(position.coords.latitude * 10) / 10;
        var long = position.coords.longitude;
        var url = "http://api.openweathermap.org/data/2.5/find?lat=" + lat + "&lon=" + long + "&cnt=1&appid=" + key;
        console.log(lat);
	    console.log(long);
        console.log(url);

        getWeatherData(url);
    });
}

function getWeatherData(url) {
    var request = new XMLHttpRequest();
    console.log(url);
    request.open('GET', url);
    request.onload = function() {
        var x = JSON.parse(request.responseText);
        addHTML(x);

    }
    request.send(null);
}

function addHTML(x) {
    showCity.innerHTML = "";
    var getCity = "<p>" + x.list[0].name + "</p>";
    showCity.innerHTML = getCity;
}
