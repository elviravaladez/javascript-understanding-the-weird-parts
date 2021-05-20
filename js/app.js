//Global Environment and the Global Object
//Global: Not Inside a Function
//There is ALWAYS a global object b/c of the JavaScript engine

//The Execution Context: Creation and "Hoisting"
b(); //Called b!
console.log(a); //undefined
//You get "undefined" because of hoisting

//Setup Memory Space for Variables and Functions -> referred to as "Hoisting"


//In this scenario, the variable is saved and initially set to undefined. That's why we see undefined when we run the code above.
var a = 'Hello World!';

//the entire function is saved in memory space
function b() {
    console.log('Called b!');
}
