"use strict";
var NameAndWeather_1 = require("./modules/NameAndWeather");
var DuplicateName_1 = require("./modules/DuplicateName");
var tempConverter_1 = require("./tempConverter");
var name = new NameAndWeather_1.Name("Adam", "Freeman");
var loc = new NameAndWeather_1.WeatherLocation("raining", "London");
var other = new DuplicateName_1.Name();
var cTemp = tempConverter_1.TempConverter.convertFtoC(38);
console.log(name.nameMessage);
console.log(loc.weatherMessage);
console.log("The temp is " + cTemp + "C");
