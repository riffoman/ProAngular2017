"use strict";
var NameAndWeather_1 = require("./modules/NameAndWeather");
var DuplicateName_1 = require("./modules/DuplicateName");
var name = new NameAndWeather_1.Name("Adam", "Freeman");
var loc = new NameAndWeather_1.WeatherLocation("raining", "London");
var otherName = new DuplicateName_1.Name();
console.log(name.nameMessage);
console.log(loc.weatherMessage);
console.log(otherName.message);
