function getWeather() {
    navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        var api = "http://api.openweathermap.org/data/2.5/find?lat=" + lat + "&lon=" + long + "&cnt=10";
        console.log(lat);
	    console.log(long);

    });
}
