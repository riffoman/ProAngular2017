import { Name, WeatherLocation } from "./modules/NameAndWeather";
import { Name as OtherName } from "./modules/DuplicateName";
let name = new Name("Adam", "Freeman");
let loc = new WeatherLocation("raining", "London");
let otherName = new OtherName();
console.log(name.nameMessage);
console.log(loc.weatherMessage);
console.log(otherName.message);