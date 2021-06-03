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

// //Function Statement: B/c it doesn't result in a value
// greet();//hi
//
// function greet() {
//     console.log('hi');
// }
//
// //don't try this BEFORE the var anonymousGreet b/c function expressions ARE NOT hoisted. Your var anonymousGreet will be set to undefined in memory when you call anonymousGreet() and you will get an error
// // anonymousGreet();
//
// //Function Expression
// var anonymousGreet = function() {
//     console.log('hi');
// }
//
//
// //instead do this
// anonymousGreet();

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


// //how to invoke/run a passed function
// function log(a) {
//     a();
// }
//
// //passing a function to a function
// log(function() {
//     console.log('hi');
// });


//BY VALUE (primitives)

//CODE:

// var a = 3;
// var b;
//
// b = a; //3
// //var b in memory has a new spot of memory as a copy of a
//
// b = a;
// a = 2;//when changing a, has no value on b b/c b is just a copy of the previous a value
// console.log(a);//2
// console.log(b);//3
//
// //by reference (all objects (including functions))
// var c = { greeting: 'hi' };
// var d;
//
// d = c;
// c.greeting = 'hello'; //mutate
// //mutate: to change something.
// // "immutable" means it can't be changed
//
// console.log(c);//{ greeting: 'hello' }
// console.log(d);//{ greeting: 'hello' }
//
// //The output is { greeting: 'hello' } b/c they are pointing to the same place in memory (set equal to each other by reference)
//
//
// //by reference (even as parameters)
// function changeGreeting(obj) {
//     obj.greeting = 'hola'; //mutate
// }
//
// changeGreeting(d);
//
// console.log(c);// { greeting: 'hola' }
// console.log(d);// { greeting: 'hola' }
//
// //equals operator sets up new memory space (new address)
// c = { greeting: 'howdy' };
// //that's why d is not effected by the change above
// console.log(c); //{ greeting: 'howdy' }
// console.log(d);//{ greeting: 'hola' };


//OBJECTS, FUNCTIONS, AND this

//CODE:

//'this' keyword

// console.log(this);//window object

// function a() {
//     console.log(this);
//     this.newVariable = 'hello';//attaching this variable to the global object
// }
//
// var b = function () {
//     console.log(this);
// }
//
// //invoking a
// a();//window object
// //'this' points to the global object. That's why you get the window object
// console.log(newVariable);//hello
// b();//window object
//
// //Whenever you create a function (function expression, function statement, creating a function at this level in the code) then 'this' will point to the global object (the window object in this case)
//
//
// //OBJECT METHOD
//
// var c = {
//     name: 'The c object',
//     //creating a method (function)
//     log: function () {
//         var self = this;
//
//         self.name = 'Updated c object'
//         console.log(self);//{name: "Updated c object", log: ƒ}
//
//         var setName = function (newName) {
//             self.name = newName;
//         }
//
//         setName('Updated again! The c object');
//         console.log(self);//{name: "Updated again! The c object", log: ƒ}
//     }
// }
//
// c.log();
// ////{name: "Updated c object", log: ƒ}
// //{name: "Updated again! The c object", log: ƒ}
//
//
// //ARRAYS - Collections of anything
//
// //CODE:
//
// // var arr = new Array();
// //or
// var arr = [
//     1,
//     false,
//     {
//         name: 'Jane',
//         address: '111 Main St.'
//     },
//     function (name) {
//         var greeting = 'Hello ';
//         console.log(greeting + name);
//     },
//     "hello"
// ];
//
// //JS arrays are diff. b/c
// console.log(arr);//[1, false, {name: "Jane", address: "111 Main St."}, ƒ (name), "hello"]
//
// arr[3](arr[2].name);//Hello Jane
//
//
// //'arguments' and SPREAD
// //Arguments: the parameters you pass to a function
// //JS gives you a keyword of the same name which contains them all
//
// //CODE:
//
// function greet(firstName, lastName, language) {
//     console.log(firstName);
//     console.log(lastName);
//     console.log(language);
//     console.log('--------------');
// }
//
// greet();
// //undefined
// //undefined
// //undefined
// // --------------
// //hoisting takes care of these unset parameters in the invoked greet()
//
// greet('John');
// //John
// // undefined
// // undefined
// // --------------
//
// greet('John', 'Doe');
// //John
// //Doe
// // undefined
// // --------------
//
// greet('John', 'Doe', 'es');
// //John
// //Doe
// //es
// // --------------
//
//
// function greetings(firstName, lastName, language) {
//
//     language = language || 'en';//language will equal 'en' if undefined
//
//     if(arguments.length === 0) {
//         console.log('Missing parameters!');
//         console.log('--------------');
//         return;
//     }
//
//     console.log(firstName);
//     console.log(lastName);
//     console.log(language);
//     console.log(arguments);
//     console.log('arg 0: ' + arguments[0]);
//     //keyword arguments outputs a list of all the values that you passed.
//     // It is array-like. It acts and looks like an array, but it doesn't have all the features of an array
//     console.log('--------------');
// }
//
//
// greetings();
// greetings('John');
// greetings('John', 'Doe');
// greetings('John', 'Doe', 'es');
//
//
// //FUNCTION OVERLOADING
//
// //CODE:
//
// function greet1(firstName, lastName, language) {
//     language = language || 'en';
//
//     if(language === 'en') {
//         console.log('Hello ' + firstName + ' ' + lastName);
//     }
//
//     if(language === 'es') {
//         console.log('Hola ' + firstName + ' ' + lastName);
//     }
// }
//
// function greetEnglish(firstName, lastName) {
//     greet1(firstName, lastName, 'en');
// }
//
// function greetSpanish(firstName, lastName) {
//     greet1(firstName, lastName, 'es');
// }
//
// greetEnglish('John', 'Doe');
// greetSpanish('John', 'Doe');



//WHITESPACE

// //CODE:
// var
//     // first name of the person
//     firstName,
//
//     // last name of the person
//     lastName,
//
//     //the language
//     //can be 'en' or 'es'
//     language;
//
// var person = {
//   //the first name
//   firstName: 'John',
//   //the last name
//   //(always required)
//   lastName: 'Doe'
// };
//
// console.log(person); //{firstName: "John", lastName: "Doe"}


//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)s

//CODE:

// //function statement
// function greet(name) {
//     console.log('Hello ' + name);
// }
//
// //invoke the function
// greet('John'); //Hello John
//
// //using a function expression
// var greetFunc = function () {
//     console.log('Hello ' + name);
// };
//
// greetFunc('John');//Hello John


// var greeting = function(name) {
//     console.log('Hello ' + name);
// };


// console.log(greeting);
//f (name) {
//     console.log('Hello ' + name);
// }


//invoke it with a parameter
// console.log(greeting('John'));
//Hello John
//undefined

//using an Immediately Invoked Function Expression (IIFE)
// var greeting = function(name) {
//     return 'Hello ' + name;
// }('John');
//
// console.log(greeting);//Hello John
//greeting contains a string now b/c i invoked the function

//you will get an error if you try this:
// console.log(greeting());//Uncaught TypeError: greeting is not a function


//Valid JS expressions, even though we are not doing anything with them
// 3;
// "I am a string";

// {
//     name: 'John'
// };

// //This is a function statement
// function(name) {
//     return 'Hello ' + name;
// }

//There are a few ways to do make this a function expression:
//The most accepted way to do this is to wrap the function in parenthesis

//CODE:
// var firstName = 'John';
//
//
// // IIFE (immediately invoked function expression)
//
// //you can invoke it inside the parenthesis
// (function(name) {
//     var greeting = 'Hello';
//     console.log(greeting + ' ' + name);
// }(firstName));// inside the parenthesis
//
//
// //another syntax: you can invoke it outside the parenthesis
// (function(name) {
//     var greeting = 'Hello';
//     console.log(greeting + ' ' + name);
// })(firstName);// outside the parenthesis


//IIFEs and SAFE CODE

//CODE:
// (function (global, name) {
//     var greeting = 'Hello';
//     global.greeting = 'Hello'; //intentionally making the global 'greeting' variable equal to 'Hello'
//     console.log(greeting + ' ' + name);
// }(window, 'John')); //IIFE
//
// console.log(greeting);//Hola
//This outputs 'Hola' b/c greet.js is stacked on top of app.js in index.html
//'Hola' is available via the Global Execution Context, whereas greeting 'Hello' is available in app.js via Execution Context(for the anonymous function)


//UNDERSTANDING CLOSURES

// //CODE:
// function greet(whatToSay) {
//     return function(name) {
//         console.log(whatToSay + ' ' + name);
//     }
// }
//
// var sayHi = greet('Hi');//invokes greet()
// sayHi('Samantha');//This returns a function. We invoked the function by using ('Samantha')
//
// //How does the sayHi variable still know what to say?
//
//
// //closures example:
// function buildFunctions() {
//     var arr = [];
//
//     for(var i = 0; i < 3; i++) {
//         arr.push(
//             //function is being created here
//             function() {
//                 console.log(i);//this is NOT being executed here
//             }
//         );
//     }
//     return arr;//3
// }
//
// var fs = buildFunctions();//this line executes buildFunctions()
//
// //function is being invoked here (down below)
// fs[0]();//3
// fs[1]();//3
// fs[2]();//3
//
// var arr = [];
//
// function buildFunctions2() {
//     //execute a function on the fly using IIFE
//     //j will be stored as 0, 1, 2 in different execution contexts
//     for(var i = 0; i < 3; i++) {
//         arr.push(
//             (function(j) {
//                 return function() {
//                     console.log(j);
//                 }
//             }
//             )(i));
//     }
//     return arr;
// }
//
// var fs2 = buildFunctions2();//this line executes buildFunctions2()
//
// fs2[0]();//0
// fs2[1]();//1
// fs2[2]();//2


//FUNCTION FACTORIES

// //CODE:
// function makeGreeting(language) {
//     return function(firstName, lastName) {
//         if(language === 'en') {
//             console.log('Hello ' + firstName + ' ' + lastName);
//         }
//
//         if(language === 'es') {
//             console.log('Hola ' + firstName + ' ' + lastName);
//         }
//     }
// }
//
// //These lines execute makeGreeting(), then they return a function(firstName, lastName)
// var greetEnglish = makeGreeting('en');//this is one execution context
// var greetSpanish = makeGreeting('es');//this is a NEW execution context
//
// //Everytime you call a function, you get a new execution context, with its own variable environment
//
// greetEnglish('John', 'Doe'); //Hello John Doe
// greetSpanish('John', 'Doe'); //Hola John Doe


//CLOSURES AND CALLBACKS

// //CODE:
// function sayHiLater() {
//     var greeting = 'Hi!';
//     //using closures and function expressions
//     //passing function object and another parameter to set the time
//     //Thanks to the closure it still has access to the console.log(greeting) action
//     setTimeout(function () {//callback function
//         console.log(greeting);
//     }, 3000);
// }
//
// sayHiLater();//Hi!
//
//
// //jQuery uses function expressions and first-class functions!
// // //CODE EXAMPLE:
// // $("button").click()function () {
// //
// // });



//CALL(), APPLY(), and BIND()

// //CODE:
// var person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     getFullName: function() {
//         var fullName = this.firstName + ' ' + this.lastName;
//         return fullName;
//     }
// }
//
// var logName = function(lang1, lang2) {
//     console.log('Logged: ' + this.getFullName());
//     console.log('Arguments: ' + lang1 + ' ' + lang2);
//     console.log('----------------');
// }
//
// //using the function as an object and call a method of the object -> bind
// var logPersonName = logName.bind(person);
// //The bind() returns a copy of the logName(). Whenever it's run the JS engine sees that this is referring to person
//
// logPersonName('en');
// //Logged: John Doe
// //Arguments: en undefined
// //----------------
//
// // //Can do this as well
// // var logName = function(lang1, lang2) {
// //     console.log('Logged: ' + this.getFullName());
// // }.bind(person);
// //
// // logName();//Logged: John Doe
//bind() creates a copy and lets us tell 'this' what it will represent


//call()
// //CODE:
// var person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     getFullName: function() {
//         var fullName = this.firstName + ' ' + this.lastName;
//         return fullName;
//     }
// }
//
// var logName = function(lang1, lang2) {
//     console.log('Logged: ' + this.getFullName());
//     console.log('Arguments: ' + lang1 + ' ' + lang2);
//     console.log('----------------');
// }
//
//
// var logPersonName = logName.bind(person);
// logPersonName('en');
//
// // logName();//standard way of calling a function
// logName.call(person, 'en', 'es');//calling (executing) a function with call(). Doing this lets us control what 'this' will be
// //first parameter is what 'this' will be. The other parameters are the parameters needed for that specific function. In this case, lang1 and lang2.
//
// // logName.apply();
//
// //Example of immediately invoking a function, while creating a function on the fly. Using apply()
// (function (lang1, lang2) {
//     console.log('Logged: ' + this.getFullName());
//     console.log('Arguments: ' + lang1 + ' ' + lang2);
//     console.log('----------------');
// }).apply(person, ['en', 'es']);
// // Logged: John Doe
// // Arguments: en es
// //----------------
//
//
// //function borrowing
// var person2 = {
//     firstName: 'Jane',
//     lastName: 'Doe'
// }
//
// //setting this to person2 in order to borrow the method from the 'person' object
// console.log(person.getFullName.apply(person2));


// //function currying: creating a copy of a function but with some preset parameters. Very useful in mathematical situations.
// //taking a function, creating a new function from it with some default parameters.
// function multiply(a, b) {
//     return a * b;
// }
//
// var multiplyByTwo = multiply.bind(this, 2);//2 now represents the first parameter "a" and will always be a 2 for the multiplyByTwo()
// console.log(multiplyByTwo(4));//4 represents b, therefore the output will be 8
// var multiplyByTwo = multiply.bind(this, 2, 2);//if i pass both parameters to the bind, both of the values passed 2 and 2 are the permanent values. Therefore, if you pass a 5, like below, you still get 4, b/c 2 * 2 is 4
// console.log(multiplyByTwo(5));//4
//
// //FUNCTIONAL PROGRAMMING
// function mapForEach(arr, fn) {
//     var newArr = [];
//
//     for(var i = 0; i < arr.length; i++) {
//         newArr.push(fn(arr[i]));
//     }
//
//     return newArr;
// }
//
// var arr1 = [1,2,3];
//
// console.log(arr1); //[1, 2, 3]
//
// var arr2 = mapForEach(arr1, function (item) {
//     return item * 2;
// });
//
// console.log(arr2); //[2, 4, 6]
//
// var arr3 = mapForEach(arr1, function (item) {
//     return item > 2;
// });
//
// console.log(arr3); //[false, false, true]
//
// //check and see if this item is past a certain limit
// //created a function using function expression that accepted a "limiter"
// // that I'm checking against to see if individual array "item"s are greater than the "limiter"
// //doing the work to check if the item is past the limit, returns a boolean
// var checkPastLimit = function (limiter, item) {
//     return item > limiter;
// }
//
// //call mapForEach, pass the arr that it loops over
// //pass the "checkPastLimit function and make a copy of it using bind()
// //put the word "this" although it doeesn't matter in this situation b/c we're not using
// //"this" inside the function
// //set first parameter to 1, so that when mapForEach() calls the fn(arr[i]) and reaches that array item  that has been passsed
// //in the checkPastLimit, it will run it through the for loop to result in the appropriate responses
// var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
// console.log(arr4);//[false, true, true]
//
// //Creating a function where you only pass the "limiter" and it gives back a function like "checkPastLimit.bind(this, 1));" without having to use bind() outside of the variable
// var checkPastLimitSimplified = function(limiter) {
//     return function (limiter, item) {
//         return item > limiter;
//     }.bind(this, limiter);//using .bind() to preset the "limiter"
// };
//
// var arr5 = mapForEach(arr1, checkPastLimitSimplified(2));
// console.log(arr5);//[false, false, true]


//Object-Oriented JavaScript and Prototypal Inheritance
//Inheritance (in JS): One object gets access to the properties and methods of another object

//Classical vs prototypal inheritance
//Classical Inheritance: Verbose (Java, C#)
//ex: friend, protected, private, interface

//Prototypal Inheritance: Simple (JS)
//flexible, extensible, easy to understand


//Understanding the Prototype
//Prototype:
//obj (has prop1). Access it with obj.prop1
//All objects have a proto {} property
//It's an object that stands on its own. "proto" is the prototype
//Has it's own properties -> prop 2. obj.prop2
//the prototype can point to its own prototypes and so on and so forth
//prototype chain: where we have access to a property or method
// amongst a sequence of objects that are connected via the prototype property
//(it's hidden from you in a way--> you don't have to say obj.proto.proto.prop2, you just say obj. prop2

//If you have another object (obj2) it can point to the same object as it's prototype
//Objects can share all the same prototypes if you want them to

// var person = {
//     firstName: 'Default',
//     lastName: 'Default',
//     getFullName: function() {
//         return this.firstName + ' ' + this.lastName;
//     }
// }
//
// var john = {
//     firstName: 'John',
//     lastName: 'Doe'
// }
//
// // //Don't do this EVER! For demo purposes only!
// john.__proto__ = person; //setting prototype of john object to person object. John now inherits from person
// console.log(john.getFullName());
// console.log(john.firstName);
//
// // var jane = {
// //     firstName: 'Jane'
// // }
// // //Don't do this EVER! For demo purposes only!
// // jane.__proto__ = person;
// // console.log(jane.getFullName());
//
// //EVERYTHING IS AN OBJECT (or a primitive) IN JS
// var a = {};
// var b = function(){ };
// var c = [];
//
//
// //REFLECTION AND EXTEND
// //Reflection: an object can look at itself, listing and changing its properties and methods.
// john.__proto__ = person;
// for(var prop in john) {
//     console.log(prop + ': ' + john[prop]);
// }
// //firstName: John
// //lastName: Doe
// //getFullName: function() {
// //         return this.firstName + ' ' + this.lastName;
// //     }
//
// for(var prop in john) {
//     if(john.hasOwnProperty(prop)) {
//         console.log(prop + ': ' + john[prop]);
//     }
// }
// //firstName: John
// //lastName: Doe
//
//
// var jane = {
//     address: '111 Main St.',
//     getFormalFullName: function() {
//         return this.lastName + ', ' + this.firstName;
//     }
// }
//
// var jim = {
//     getFirstName: function() {
//         return firstName;
//     }
// }
//
// _.extend(john, jane, jim);
//
// console.log(john);


//BUILDING OBJECTS
//Diff Ways:
//object literal syntax, function constructors, "new", and the history of JS

//FUNCTION CONSTRUCTORS:
//lets us construct an object via a function
// function Person(firstName, lastName) {
//     console.log(this);//Person {}
//     this.firstName = firstName;
//     this.lastName = lastName;
//     console.log('This function is invoked.');
// }
//
// //FUNCTION CONSTRUCTORS AND '.PROTOTYPE'
// //When you use a function constructor, your prototype gets set automatically
// //Anytime you create a function object it has certain properties: name, code and prototype
// //when you use the "new" operator
// //prototype is used only by the "new" operator
//
//
// //the prototype property is where the prototype chain points for any objects created using that function. In this case the Person function
// Person.prototype.getFullName = function () {
//     return this.firstName + ' ' + this.lastName;
// }
//
//
// //create a new object using the "new" operator
// var john = new Person('John', 'Doe');
// //the "new" keyword you are creating an empty object
// //it sets the prototype of the empty object to the prototype property of the function that you then call. In this case, Person('John', 'Doe')
// console.log(john);//Person{firstName: "John", lastName: "Doe"}
//
// //What if you want to create more people with the same function?
// var jane = new Person('Jane', 'Doe');
// console.log(jane);
//
// Person.prototype.getFormalFullName = function () {
//     return this.lastName + ', ' + this.firstName;
// }
//
// console.log(john.getFormalFullName());//Doe, John

//'new' and functions
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
}

//if you forget to put the 'new' keyword, this function will STILL execute
// and since it doesn't return anything explicitly (it returns undefined)
// which means your objects will be set to "undefined"
//when you try to use any properties and methods on that object you will get an error
//EXAMPLE:
// Uncaught TypeError: Cannot read property 'getFormalFullName' of undefined

//TO AVOID THIS, try using the following conventions:
//start any function that is intended to be used as a function constructor with a capital letter (that way you are able to identify functions that are missing the "new" keyword
// Ex: Person()
var john = Person('John', 'Doe');
console.log(john);

Person.prototype.getFormalFullName = function () {
    return this.lastName + ', ' + this.firstName;
}

console.log(john.getFormalFullName());//Doe, John