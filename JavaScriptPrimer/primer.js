var MyClass = (function () {
    function MyClass(name, weather) {
        this.name = name;
        this.weather = weather;
    }
    MyClass.prototype.printMessages = function () {
        console.log("Hello " + this.name + ". ");
        console.log("Today is " + this.weather + ".");
    };
    return MyClass;
}());
var myData = new MyClass("Milos", "rainy");
myData.printMessages();
