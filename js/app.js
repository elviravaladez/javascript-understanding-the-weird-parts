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
var a;
// var a = "Hello World";
console.log(a); //undefined

if (a === undefined) {
    console.log('a is undefined!');
}
else {
    console.log('a is defined!');
}


//NEVER set a variable to undefined b/c it helps with debugging to let you know that you've never set the value of the variable

//CODE:
// a = undefined;