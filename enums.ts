
// Enums
enum myConstants {
    pi = 3.14,
    e = 2.73,
    log2 = 0.3,
    log5 = 0.7

}

console.log(`Findind area of circle`);
var radius : number = 10;
console.log(2 * myConstants.pi * radius);


// Type aliases

type StringOrNum = string | number;

const logDetails = (uid: StringOrNum, item : string) =>{
    console.log(`${item} has a uid of ${uid}`);
}

// anytype

let age: any = 25;
age = true;
age = 'sanjay';
console.log(age);
age = {name : 'hello'};
console.log(age);

let mixed: any[] = [];
mixed.push(5);
mixed.push('bikram');
mixed.push(false);
console.log(mixed);

// arrays 

let names = ['sajay', 'akash','ajay'];
names.push('hello');

let numbers = [1,2,3,4,5];
numbers.push[24];


let mixer = ['sanjay',23,'bikaram',25];
mixer.push('ajay');
mixer.push(45);

//objects

let ninja = {
    name: 'sanjay',
    age: 23,
    
}