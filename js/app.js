//Global Environment and the Global Object
//Global: Not Inside a Function
//There is ALWAYS a global object b/c of the JavaScript engine

//The Execution Context: Creation and "Hoisting"
//CODE:
// b(); //Called b!
// console.log(a); //undefined

//You get "undefined" because of hoisting

//Setup Memory Space for Variables and Functions -> referred to as "Hoisting"


//In this scenario, the variable is saved and initially set to undefined. That's why we see undefined when we run the code above.

//CODE:
// var a = 'Hello World!';

//the entire function is saved in memory space

//CODE:
// function b() {
//     console.log('Called b!');
// }


//JavaScript and 'undefined;

//CODE:
// var a;
// // var a = "Hello World";
// console.log(a); //undefined
//
// if (a === undefined) {
//     console.log('a is undefined!');
// }
// else {
//     console.log('a is defined!');
// }


//NEVER set a variable to undefined b/c it helps with debugging to let you know that you've never set the value of the variable

//CODE:
// a = undefined;

//The Execution Context Code
//CODE:
// function b() {
//     console.log('Called b!');
// }
//
// b();
//
// console.log(a);
//
// var a = 'Hello World!';
//
// console.log(a);


//FUNCTION INVOCATION AND THE EXECUTION STACK
//CODE:
// function b() {
//
// }
//
// function a() {
//     b();
// }
//
// a();


//FUNCTIONS, CONTEXT, AND VARIABLE ENVIRONMENTS
//Variable Environment: where the variables live and how they relate to each other in memory

//CODE:
// function b() {
//     var myVar;
//     console.log(myVar);//undefined
// }
//
// function a() {
//     var myVar = 2;
//     console.log(myVar); //2
//     b();
// }
//
// var myVar = 1;
//
// console.log(myVar); //1
// a();
// //2
// //undefined
// console.log(myVar); //1


//THE SCOPE CHAIN

//CODE:
function b() {
    console.log(myVar);
}

function a() {
    var myVar = 2;
    b();
}

var myVar = 1;
a(); //1

//lexical environment: where the code is written within the code and where it will sit in memory
// 1 is logged because myVar is  before running the a()


//SCOPE, ES6, AND let
//Scope: Where a variable is available in your code, and if it's truly the same variable, or a new copy

//CODE:

if(a > b) {
    let c = true;
}

for(let i = 0; i <= 10; i++) {
    console.log(i);
}

//ASYNCHRONOUS

//Asynchronous: More than one at a time

//CODE:
//long running function
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while(new Date() < ms) {}
    console.log('finished function');
}

function clickHandler() {
    console.log('click event!');
}

//listen for the click event
document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');
//JS looks at the execution stack first, THEN looks at the event queue (click handlers, etc.)