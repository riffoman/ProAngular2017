"use strict";
var NameAndWeatherLocation = require("./modules/NameAndWeather");
var DuplicateName_1 = require("./modules/DuplicateName");
var name = new NameAndWeatherLocation.Name("Adam", "Freeman");
var loc = new NameAndWeatherLocation.WeatherLocation("raining", "London");
var other = new DuplicateName_1.Name();
console.log(name.nameMessage);
console.log(loc.weatherMessage);
console.log(other.message);
