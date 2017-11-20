class MyClass {
    constructor(name, weather) {
        this.name = name;
        this.weather = weather;
    }
    printMessages() {
        console.log("Hello " + this.name + ". ");
        console.log("Today is " + this.weather + ".");
    }
}
class MySubClass extends MyClass {
    constructor(name, weather, city) {
        super(name, weather);
        this.city = city;
    }
    printMessages() {
        super.printMessages();
        console.log(`You are in ${this.city}`);
    }
}
let myData = new MySubClass("Adam", "sunny", "London");
myData.printMessages();