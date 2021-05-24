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


#### [Back To Top](#javascript-understanding-the-weird-parts)

## Author

### [Elvira Valadez](https://github.com/elviravaladez)

---

#### [Back To Top](#javascript-understanding-the-weird-parts)