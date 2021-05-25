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
// function b() {
//     console.log(myVar);
// }
//
// function a() {
//     var myVar = 2;
//     b();
// }
//
// var myVar = 1;
// a(); //1

//lexical environment: where the code is written within the code and where it will sit in memory
// 1 is logged because myVar is  before running the a()


//SCOPE, ES6, AND let
//Scope: Where a variable is available in your code, and if it's truly the same variable, or a new copy

//CODE:
// if(a > b) {
//     let c = true;
// }
//
// for(let i = 0; i <= 10; i++) {
//     console.log(i);
// }

//ASYNCHRONOUS

//Asynchronous: More than one at a time

//CODE:
//long running function
// function waitThreeSeconds() {
//     var ms = 3000 + new Date().getTime();
//     while(new Date() < ms) {}
//     console.log('finished function');
// }
//
// function clickHandler() {
//     console.log('click event!');
// }
//
// //listen for the click event
// document.addEventListener('click', clickHandler);
//
// waitThreeSeconds();
// console.log('finished execution');
//JS looks at the execution stack first, THEN looks at the event queue (click handlers, etc.)


//OPERATOR PRECEDENCE AND ASSOCIATIVITY

//Operator Precedence-which operator function gets called first. Functions are called in order of precedence(higher precedence wins)

//Operator Associativity-what order operator functions get called in: left to right or right to left. When functions have the same precedence

//CODE:
// var a = 3 + 4 * 5;
// console.log(a);


//Associativity Example

//CODE:

// var a = 2, b = 3, c = 4;
// a = b = c;
// console.log(a); //4
// console.log(b); //4
// console.log(c); //4
// //The assignment operator has an associativity of right-to-left, which is why a, b, and c equal 4
//
// var num = (3 + 4) * 5;
// console.log(num);//35


//COERCION-converting a value from one type to another

//CODE:
// var a = 1 + '2';
// console.log(a); //12 -> outputs like a string b/c 1 is coerced as a string, therefore, the output is '12'
// //this is possible b/c JS is dynamically typed

// var a = 1, b = '2';
// console.log(a + b);//12 (as a string)


//COMPARISON OPERATORS

//CODE:

// console.log(1 < 2 < 3); //true b/c what is really happening is -> true < 3. true coerces to 1, which makes 1 < 3, which gives us true
// console.log(3 < 2 < 1); //true b/c what is really happening is -> false < 1. false coerces to 0, which makes 0 < 1, which gives us true
//
// //Double Equals (Equality) Examples
// console.log(3 == 3); //true
// console.log(3 === "3"); //false
// console.log(false == 0); //true
// console.log(null == 0); //false
// //null DOES NOT coerce to 0 for comparison
// console.log(null < 1);//true
// console.log("" == 0); //true
// console.log("" == false); //true
//
// //Triple Equals (Strict Equality) Examples
// console.log(3 === 3); //true
// console.log("3" === "3"); //true
// console.log(3 === "3");//false
//
//
// var a = 0;
// var b = false;
//
// //Not the best option
// if(a == b) {
//     console.log('They are equal. Woo-hoo!');
// } else {
//     console.log('Nope, not equal.');
// }
// //Output: They are equal. Woo-hoo!
//
// //Best option
// if(a === b) {
//     console.log('They are equal. Woo-hoo!');
// } else {
//     console.log('Nope, not equal.');
// }
//Output: Nope, not equal.

//Reminder: Use triple equals by default


//EXISTENCE AND BOOLEANS

//CODE:

// var a;
// a = null;
//
// if(a) {
//     console.log('Something is there.');
// } else {
//     console.log('nothing there');
// }
//
// //if "a" is undefined, null or "" it will be converted to false
//
// var b;
// b = 0;
//
// if(b || b === 0) {//false || true -> true
//     console.log('Something is there.');
// } else {
//     console.log('nothing there');
// }
// //output: Something is there.


//DEFAULT VALUES

//CODE:

// function greet(name) {
//     name = name || '<Your name here>'; // if name is undefined or "" or null we will get '<Your name here>'
//     console.log('Hello ' + name);
// }
// greet('Tony');//Hello Tony
// greet(0); //Hello <Your name here>
// greet(); //Hello <Your name here>
//
// console.log(true || false); //true
// console.log(undefined || 'hello'); //"hello"
// Boolean("hello"); //true
// console.log("hi" || "hello"); //"hi"
// console.log(0 || 1); //1
// console.log(undefined || "hello"); //"hello"
// console.log(null || "hello"); //"hello"
// console.log("" || "hello"); //"hello"


//FRAMEWORK ASIDE: DEFAULT VALUES

//CODE:

// console.log(libraryName);//Lib 1


//OBJECTS AND FUNCTIONS

//CODE:

// var person = new Object();//there are better ways to do this
//
// person["firstName"] = "Sam"; //adding a property via the computed member access operator -> []
// person["lastName"] = "Conrad";
//
// var firstNameProperty = "firstName";
// console.log(person);//{firstName: "Sam"
//                     //lastName: "Conrad"}
// console.log(person[firstNameProperty]);//Sam
//
// //dot operator -> more common operator for accessing properties and methods
// //Preferred approach is to use the dot operator (ALWAYS USE THE DOT OPERATOR)
// console.log(person.firstName);//Sam
// console.log(person.lastName); //Conrad
//
// //object sitting inside another object
// person.address = new Object();//not the preferred way to create an object
// person.address.street = "111 Main St";
// person.address.city = "New York";
// person.address.state = "NY";
//
// console.log(person.address.street); //111 Main St
// console.log(person.address.city);//New York
// console.log(person["address"]["state"]); //NY


//OBJECTS AND OBJECT LITERALS

//CODE:

// var person1 = {};
// console.log(person1);//empty object
//
// var john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     address: {
//         street: '111 Main St.',
//         city: 'New York',
//         state: 'NY'
//     }
// };//object literal
// console.log(john);
//
// function greet1(person) {
//     console.log('Hi, ' + person.firstName);
// }
//
// greet1(john);//Hi, John
//
//
// //valid object literal syntax to create an object on the fly, when the function is called
// greet1({
//     firstName: 'Jane',
//     lastName: 'Doe'
// });// Hi, Jane
//
// john.address2 = {
//     street: '222 Second St.'
// }

//Object literal syntax can make for clean/easy to read code


//FAKING NAMESPACES

//A namespace is a container for variables and functions. Typically used to keep variables and functions with the same name separate.
//JS does not have namespaces.B/c of the nature of objects in JS, we don't need namespaces.


//CODE:

// var greet = 'Hello!';
// var greet = 'Hola!';
//
// console.log(greet);//Hola!
//
// //object literal syntax
// var english = {};
// var spanish = {};
//
// english.greet = 'Hello!';
// spanish.greet = 'Hola!';
//
// console.log(english);//{greet: "Hello!"}
// console.log(spanish);//{greet: "Hola!"}

//cannot do this
// english.greetings.greet = 'Hello!';//english.greetings is undefined
//returns undefined.greet

// //instead do this
// english.greetings = {};
//
// //or initialize like this:
// var english = {
//     greetings: {
//         basic: 'Hello!'
//     }
// };
//
// english.greetings.greet = 'Hello!';


//JSON -> JavaScript Object Notation

//CODE:

// var objectLiteral = {
//     firstName: 'Sam',
//     isAProgrammer: true
// }
//
// //for any object you can do JSON.stringify to convert the object to a JSON string
// console.log(JSON.stringify(objectLiteral));//{"firstName":"Sam","isAProgrammer":true}
//
// var jsonValue = JSON.parse('{ "firstName":"Sam", "isAProgrammer":true}')
//
// console.log(jsonValue);//{firstName: "Sam", isAProgrammer: true}


//JSON syntax
//anything that is json valid is valid object literal js syntax
// {
//     "firstName": "Mary",
//     "isAProgrammer": true
// }


//FUNCTIONS ARE OBJECTS

//In JS, functions are object
//First class functions: everything you can do with other types you can do with functions. Assign them to variables, pass them around, create them on the fly.

//What does the function object look like?
//Resides in memory. A function is a special type of object. You CAN attach primitives, objects, and functions to functions.
//Two hidden properties:
//1. Name 
//2. Code


//CODE:

// //Think of a function as an object whose code just happens to be one of the properties of that object.
// function greet() {
//     console.log('hi');
// }
//
// //adding a property to a function
// greet.language = 'english';
//
// //not helpful
// console.log(greet);
// //ƒ greet() {
// //     console.log('hi');
// // }
//
//
// //helpful
// console.log(greet.language);//english


//FUNCTION STATEMENTS AND FUNCTION EXPRESSIONS
//

//CODE:

//Function Statement: B/c it doesn't result in a value
greet();//hi

function greet() {
    console.log('hi');
}

//don't try this BEFORE the var anonymousGreet b/c function expressions ARE NOT hoisted. Your var anonymousGreet will be set to undefined in memory when you call anonymousGreet() and you will get an error
// anonymousGreet();

//Function Expression
var anonymousGreet = function() {
    console.log('hi');
}


//instead do this
anonymousGreet();

// function log(a) {
//     console.log(a);
// }

// //creating on the fly
// log(3); //3
// log("Hello"); //Hello
// console.log({
//     greeting: 'hi'
// });//{ greeting: 'hi' }


// //creating a function on the fly. Passing a function to a function
// log(function() {
//     console.log('hi');
// });
//
// //function() {
// //  console.log('hi');
// //}


//how to invoke/run a passed function
function log(a) {
    a();
}

//passing a function to a function
log(function() {
    console.log('hi');
});