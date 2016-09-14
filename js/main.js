 var locationRequest = "";

$.getJSON("http://ip-api.com/json",function(data){
  locationRequest = data.city  + "," + data.region + "," + data.countryCode;
  $("#location").html(data.city  + ", " + data.region + ", " + data.countryCode);
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?&APPID=c1487aa92c99ced84fb9d0a49585c31b&q="+locationRequest+"&units=metric",function(weatherData){
    console.log(weatherData);
    $("#weather").html(weatherData.weather[0].main);
    // console.log(typeof weatherData.main.temp。toFixed(0));
    $("#temp-avg").html(weatherData.main.temp.toFixed(0));
    $("#temp-range").html(weatherData.main.temp_min.toFixed(0) + " - " + weatherData.main.temp_max.toFixed(0));
    // console.log(weatherData.main.temp);
    // console.log(weatherData.main.temp_max);
    // console.log(weatherData.main.temp_min);
    console.log(weatherData);
    // console.log(weatherData.weather[0].main);

    var skycons = new Skycons({"color": "black"});
    var weatherCodeIcon = "";
    switch (weatherData.weather[0].icon){
      case "01d":
        weatherCodeIcon = "CLEAR_DAY";
        break;
      case "01n":
        weatherCodeIcon = "CLEAR_NIGHT";
        break;
      case "02d":
        weatherCodeIcon = "PARTLY_CLOUDY_DAY";
        break;
      case "02n":
        weatherCodeIcon = "PARTLY_CLOUDY_NIGHT";
        break;
      case "03d":
      case "03n":
      case "04d":
      case "04n":
        weatherCodeIcon = "CLOUDY";
        break;
      case "09d":
      case "09n":
      case "10d":
      case "10n":
      case "11d":
      case "11n":
        weatherCodeIcon = "RAIN";
        break;
      case "13d":
      case "13n":
        weatherCodeIcon = "SNOW";
        break;
      case "50d":
      case "50n":
        weatherCodeIcon = "FOG";
        break;
    }
    skycons.add("weatherIcon", Skycons[weatherCodeIcon]);
    skycons.play();
  });
});
