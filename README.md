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

#### [Back To Top](#javascript-understanding-the-weird-parts)

## Author

### [Elvira Valadez](https://github.com/elviravaladez)

---

#### [Back To Top](#javascript-understanding-the-weird-parts)