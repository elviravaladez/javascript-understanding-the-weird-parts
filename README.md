# JavaScript: Understanding the Weird Parts

This is a repository to document what I've learned while taking the [JavaScript: Understanding the Weird Parts](https://www.udemy.com/course/understand-javascript/) Udemy course by [Anthony Alicea](https://www.udemy.com/course/understand-javascript/#instructor-1).

### Course Objectives
- Grasp how JavaScript works, and it's fundamental concepts
- Write solid JavaScript code
- Understand advanced concepts such as closures, prototypal inheritance, IIFEs, etc.
- Drastically improve ability to debug problems in JavaScript
- Avoid common JavaScript pitfalls and mistakes
- Understand the source code of popular JavaScript frameworks

### What I've Learned
It is recommended to NEVER set a variable's value to `undefined`. Following this practice makes it easier to debug because, as a developer, you are now able to associate `undefined` with "I've never set the value of this variable."

❌ Don't do this️
```js
var a = undefined;
```

JavaScript is single threaded, synchronous execution in its behavior.

- Single Threaded: One command at a time
- Synchronous: One at a time

JavaScript is dynamically typed, meaning you don't tell the engine what type of data a variable holds, it figures it out while your code is running.  This means variables can hold different types of values because it's all figured out during execution.
```js
//JavaScript Dynamic Typing
var isNew = true; //no errors
isNew = 'yes!';
isNew = 1;
```

`null` DOES NOT coerce to `0` for comparison.


#### Objects
A JavaScript object can have primitive properties, object properties, and/or function "methods."

Object literals are the preferred way to create an object.

Object Literal Example:
```js
var person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: '111 Main St.',
        city: 'New York',
        state: 'NY'
    }
};
```

#### JSON (JavaScript Object Notation)
JavaScript object literals and JSON are different, although they look very similar syntax-wise. 

A JSON name/value pair consists of a field name (in double quotes), followed by a colon, followed by a value. In JSON, keys MUST be strings, written in double quotes.

JSON Syntax:
```json
{
    "firstName": "Mary",
    "isAProgrammer": true
}
```

Object Literal Syntax:
```js
var objectLiteral = {
    firstName: 'Sam',
    isAProgrammer: true
}
```

#### Functions are Objects
In JavaScript, functions are a special type of object.

First class functions: everything you can do with other types (objects, strings, numbers, booleans, etc.) you can do with functions. Example: Assign them to variables, pass them around, create them on the fly.

- What does a function object look like in JavaScript?
    - Like all objects in JavaScript, it resides in memory
    - Has all the features of a normal object, in addition to other special properties (name and code)
    - You can attach properties and methods to a function, because it's just an object
    - Properties include:
        - Primitive
        - Object
        - Function
        - Name (optional, can be anonymous)
        - Code
            - Where the actual lines of code you write, sit
            - "Invocable" ()

```js
function greet() {
    console.log('hi');
}

//adding a property to a function
greet.language = 'english';

//finding the property using the dot operator
console.log(greet.language);//english
```

#### Function Statements and Function Expressions
Statement: Just does work.

Expression: A unit of code that results in a value. It doesn't have to save to a variable. Function expressions are NOT hoisted.

Function Statement Example (doesn't result in a value):
```js
//when this code is executed, it doesn't do anything, even though it is saved to memory
function greet() {
    console.log('hi');
}
```

Function Expression Example (results in a value):
```js
//when this code is executed, the anonymous function results in an object being created. 
// It returns an object
var anonymousGreet = function() {
    console.log('hi');
}
```
#### By Value and By Reference
All primitive types are by value. All objects (including functions) are by reference.

#### Automatic Semicolon Insertion
Syntax parser: reads your code

Anywhere the JS engine thinks a semicolon should be present, if it's missing, it will automatically insert a semicolon. To avoid running into errors with this, always use semicolons, rather than having the JS engine make that decision for you to avoid potential errors.


❌ Don't do this:
```js
function getPeron() {
    
    return //the JS engine automatically inserted a semicolon here, which results in "undefined" when this function is invoked
    {
        firstName: 'John'
    }
}

console.log(getPeron());//undefined
```

✅ Do this instead:
```js
function getPeron() {
    return { //keep the curly brace on the same line to prevent the JS engine from automatically inserting a semicolon
        firstName: 'John'
    }
}

console.log(getPeron());//{firstName: "John"}
```

#### Immediately Invoked Function Expressions (IIFE)s

There are two valid ways to write an IIFE:
```js
//Example One
var firstName = 'Sam';

(function(name) {
    
    var greeting = 'Hello';
    console.log(greeting + ' ' + name);
    
}(firstName));//invoked inside parenthesis
```

```js
//Example Two
var firstName = 'Sam';

(function(name) {
    
    var greeting = 'Hello';
    console.log(greeting + ' ' + name);
    
})(firstName);//invoked outside parenthesis
```

#### Function Factories
Everytime you call a function, it gets a new execution context, with its own variable environment.

```js
function makeGreeting(language) {
    return function(firstName, lastName) {
        if(language === 'en') {
            console.log('Hello ' + firstName + ' ' + lastName);
        }

        if(language === 'es') {
            console.log('Hola ' + firstName + ' ' + lastName);
        }
    }
}

//These lines execute makeGreeting(), 
// then they return function(firstName, lastName)
var greetEnglish = makeGreeting('en');//this is one execution context
var greetSpanish = makeGreeting('es');//this is a NEW execution context

//Everytime you call a function, it gets its own new execution context, 
// with its own variable environment

//This is why the output you get for the code below is as follows:
greetEnglish('John', 'Doe'); //Hello John Doe
greetSpanish('John', 'Doe'); //Hola John Doe
```

#### Closures and Callbacks
Callback Function: A function you give to another function, to be run when the other function is finished. So the function you call (invoke), 'calls back' by calling the function you gave it when it finishes.

Example of callback functions:
```js
function tellMeWhenDone(callback) {
    var a = 1000; //some work
    var b = 2000;//some work
    
    callback();// the 'callback', it runs the function I gave it
}

//callback functions being given to tellMeWhenDone()
tellMeWhenDone(function () {
    console.log('I am done!');;
})

tellMeWhenDone(function () {
    console.log('All done!');
})
```

#### `call()`, `apply()`, and `bind()`
Because JavaScript functions are a special type of object, all functions have access to special functions and methods. The methods include:
- `call()`
- `apply()`
- `bind()`

```js
var person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function() {
        var fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
}

var logName = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('----------------');
}

//using the function as an object and call a method of the object -> bind
var logPersonName = logName.bind(person);
////The bind() returns a copy of the logName(). Whenever it's run the JS engine sees that this is referring to "person"

logPersonName('en');
//That is why the output of this is as follows:
//Logged: John Doe
//Arguments: en undefined
//----------------
```

#### [Back To Top](#javascript-understanding-the-weird-parts)

## Author

### [Elvira Valadez](https://github.com/elviravaladez)

---

#### [Back To Top](#javascript-understanding-the-weird-parts)
