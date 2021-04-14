export{}
var message = 'hello world';
console.log(message);

let x = 10;
const y = 20;

let sum;
const title = "Codevolution";

// variable type

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'sanjay';

let sentance: string = `My name is ${name}
I am a beginenr in Typescript`;

console.log(sentance);

let n: null = null;
let u: undefined = undefined;

let isNew : boolean = null;
let myName : string = undefined;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];


let person1: [string, number] = ['sanjay', 1111]; // array tuple

enum Color {Black=10,Blue,Green};
let c : Color = Color.Blue;
console.log(c);

// any type

let randomValue : any = 10;
randomValue = true;
randomValue = 'sanjay';

let myVariable :unknown = 10;

function hasName(obj: any):obj is {name: string}{
    return !!obj &&
    typeof obj === "object" &&
    "name" in obj
}
if(hasName(myVariable)){
    console.log(myVariable.name);
}

//(myVariable as string).toUpperCase();

let a;
a = 20;
a = true;

let b = 10;
//b = true; will not happen in this case

let multiType : number | boolean;
multiType = 20;
multiType = true;

let anyType : any;        /// on anyType there is no intelligence support
anyType = 20;
anyType = true;


//// Functions

function add(num1:number, num2:number){  // by adding ?  can make the parameter optional
    if(num2){
        return num1 + num2;    
    }else{
        return num1;
    }
}
add(5,10);

// interface

interface Person {
    firstName: string;
    lastName : string;
}
function fullName(person : Person) {   
    console.log(`${person.firstName} ${person.lastName}`);
    
}

let p = {
    firstName : 'Sanjay',
    lastName : 'Barman'
};

fullName(p);



//// Clasess

class Employee {
    employeeName : string;


    constructor(name: string) {
        this.employeeName = name;
    }

    greet(){
        console.log(`Good Morning ${this.employeeName}`);
        
    }
}

let emp1 = new Employee('sanjay');
console.log(emp1.employeeName);
emp1.greet();


// inheritance

class Manager extends Employee{
    constructor(managerName: string){
        super(managerName);
    }
    delegateWork() {
        console.log(`Manager delegating task`);
    }
}

let m1 = new Manager(`Bikram`);
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
