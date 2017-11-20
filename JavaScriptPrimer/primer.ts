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
let myData = new MyClass("Milos", "rainy");
myData.printMessages();