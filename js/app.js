// //Object.create and Pure Prototypal Inheritance
//
// //Another way to create objects: Object.create
// var person = {
//     firstName: 'Default',
//     lastName: 'Default',
//     greet: function () {
//         return 'Hi ' + this.firstName;
//     }
// }
//
// var john = Object.create(person);
// console.log(john);//{}
//
// //Object.create creates an empty object with its prototype pointing at whatever you pass into Object.create
// //you override whatever you want to by adding the properties and methods to the object
// //Ex (Pure Prototypal Inheritance):
// john.firstName = 'John';
// john.lastName = 'Doe';
// console.log(john);//{firstName: "John", lastName: "Doe"}
// console.log(john.greet());//Hi John


// // POLYFILL
// if (!Object.create) {
//     Object.create = function (o) {
//         if (arguments.length > 1) {
//             throw new Error('Object.create implementation'
//                 + ' only accepts the first parameter.');
//         }
//         function F() {}
//         F.prototype = o;
//         return new F();
//     };
// }
//
// var person = {
//     firstname: 'Default',
//     lastname: 'Default',
//     greet: function() {
//         return 'Hi ' + this.firstname;
//     }
// }
//
// var john = Object.create(person);
// john.firstname = 'John';
// john.lastname = 'Doe';
// console.log(john);
//
//
// //INITIALIZATION
// var people = [
//     {
//         // the 'john' object
//         firstname: 'John',
//         lastname: 'Doe',
//         addresses: [
//             '111 Main St.',
//             '222 Third St.'
//         ]
//     },
//     {
//         // the 'jane' object
//         firstname: 'Jane',
//         lastname: 'Doe',
//         addresses: [
//             '333 Main St.',
//             '444 Fifth St.'
//         ],
//         greet: function() {
//             return 'Hello!';
//         }
//     }
// ]
//
// console.log(people);

//typeof, instanceof, figuring out what something is
var a = 3;
console.log(typeof a);

var b = "Hello";
console.log(typeof b);

var c = {};
console.log(typeof c);

var d = [];
console.log(typeof d); // weird!
console.log(Object.prototype.toString.call(d)); // better!

function Person(name) {
    this.name = name;
}

var e = new Person('Jane');
console.log(typeof e);
console.log(e instanceof Person);

console.log(typeof undefined); // makes sense
console.log(typeof null); // a bug since, like, forever...

var z = function() { };
console.log(typeof z);
