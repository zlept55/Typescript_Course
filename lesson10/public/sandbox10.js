// let greet: Function;
//example 1
var greet;
greet = function (name, greeting) {
    console.log("".concat(name, " says ").concat(greeting));
};
//example 2
var calc;
calc = function (numOne, numtwo, action) {
    if (action === "add") {
        return numOne + numtwo;
        ;
    }
    else {
        return numOne - numtwo;
    }
};
//example 3
var logDetails;
logDetails = function (ninja) {
    console.log("".concat(ninja.name, " is ").concat(ninja.age, " years old"));
};
