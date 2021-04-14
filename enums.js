// Enums
var myConstants;
(function (myConstants) {
    myConstants[myConstants["pi"] = 3.14] = "pi";
    myConstants[myConstants["e"] = 2.73] = "e";
    myConstants[myConstants["log2"] = 0.3] = "log2";
    myConstants[myConstants["log5"] = 0.7] = "log5";
})(myConstants || (myConstants = {}));
console.log("Findind area of circle");
var radius = 10;
console.log(2 * myConstants.pi * radius);
var logDetails = function (uid, item) {
    console.log(item + " has a uid of " + uid);
};
// anytype
var age = 25;
age = true;
age = 'sanjay';
console.log(age);
age = { name: 'hello' };
console.log(age);
var mixed = [];
mixed.push(5);
mixed.push('bikram');
mixed.push(false);
console.log(mixed);
// arrays 
var names = ['sajay', 'akash', 'ajay'];
names.push('hello');
var numbers = [1, 2, 3, 4, 5];
numbers.push[24];
var mixer = ['sanjay', 23, 'bikaram', 25];
mixer.push('ajay');
mixer.push(45);
//objects
var ninja = {
    name: 'sanjay',
    age: 23
};
