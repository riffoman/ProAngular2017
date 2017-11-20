console.log("Hello");
console.log("Apples");

//ako ovako napisemo funkciju, ona se nece moci pozvati u bloku kodu koji je prije f-je napisan
let myFunc = function (name, weather) {
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today");
};
myFunc("Adam", "sunny");



mySecondFunction("Srdjan", "rainy");
//ovako napisana funkcija se moze pozvati prije samog kofda funkcije. u prethodnom primjeru bi dislo do greske ako bi se funkcija 
//pozvala prije njene deklaracije. the browser finds the function declaration when it parses the JavaScript file and sets
//up the function before the remaining statements are executed, a process known as function hoisting
function mySecondFunction(name, weather) {
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today");
};


let products = [
    { name: "Hat", price: 24.5, stock: 10 },
    { name: "Kayak", price: 289.99, stock: 1 },
    { name: "Soccer Ball", price: 10, stock: 0 },
    { name: "Running Shoes", price: 116.50, stock: 20 }
];
let totalValue = products
    .filter(item => item.stock > 0)
    .reduce((prev, item) => prev + (item.price * item.stock), 0);
console.log("Total value: $" + totalValue.toFixed(2));

let myData = {
    name: "Adam",
    weather: "sunny",
    printMessages: function () {
        console.log("Hello " + this.name + ". ");
        console.log("Today is " + this.weather + ".");
    }
};
myData.printMessages();

