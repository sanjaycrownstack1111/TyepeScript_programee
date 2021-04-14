"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'hello world';
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = "Codevolution";
// variable type
var isBeginner = true;
var total = 0;
var name = 'sanjay';
var sentance = "My name is " + name + "\nI am a beginenr in Typescript";
console.log(sentance);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['sanjay', 1111]; // array tuple
var Color;
(function (Color) {
    Color[Color["Black"] = 10] = "Black";
    Color[Color["Blue"] = 11] = "Blue";
    Color[Color["Green"] = 12] = "Green";
})(Color || (Color = {}));
;
var c = Color.Blue;
console.log(c);
// any type
var randomValue = 10;
randomValue = true;
randomValue = 'sanjay';
var myVariable = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
//(myVariable as string).toUpperCase();
var a;
a = 20;
a = true;
var b = 10;
//b = true; will not happen in this case
var multiType;
multiType = 20;
multiType = true;
var anyType; /// on anyType there is no intelligence support
anyType = 20;
anyType = true;
//// Functions
function add(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
add(5, 10);
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Sanjay',
    lastName: 'Barman'
};
fullName(p);
//// Clasess
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('sanjay');
console.log(emp1.employeeName);
emp1.greet();
// inheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating task");
    };
    return Manager;
}(Employee));
var m1 = new Manager("Bikram");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
