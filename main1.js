function log(message1) {
    console.log(message1);
}
var message1 = 'hello world';
log(message1);
/////
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("Finally " + i);
}
doSomething();
////   type anotation
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'san'];
//enum
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
// type assecrtion
var message;
message = 'abc';
var endWithC = message.endsWith('c');
var alternativeWay = message.endsWith('c');
var log = function (message) {
    console.log(message);
};
// arrow functon in TS
var doLog = function (message) { return console.log(message); };
// 
var drawPoint = function (point) {
    //..
};
drawPoint({
    x: 1,
    y: 2
});
