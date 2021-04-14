function log(message1){
    console.log(message1);
}

var message1 = 'hello world';

log(message1);


/////

function doSomething(){
    for(let i=0;i<5;i++){
        console.log(i);
    }

    console.log("Finally "+i);
}

doSomething();

////   type anotation
let a:number;
let b: boolean;
let c : string;
let d: any;
let e : number[] = [1,2,3];
let f: any[] = [1,true,'san'];

//enum

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color {Red=0, Green=1, Blue=3};
let backgroundColor = Color.Red;

// type assecrtion
let message;
message = 'abc';
let endWithC = (<string>message.endsWith('c'));
let alternativeWay = (message as string).endsWith('c');

let log = function(message){
    console.log(message);
}
// arrow functon in TS

let doLog = (message) => console.log(message);


// 
let drawPoint = (point) =>{
    //..
}

drawPoint({
    x:1,
    y:2
})