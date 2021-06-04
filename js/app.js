//Object.create and Pure Prototypal Inheritance

//Another way to create objects: Object.create
var person = {
    firstName: 'Default',
    lastName: 'Default',
    greet: function () {
        return 'Hi ' + this.firstName;
    }
}

var john = Object.create(person);
console.log(john);//{}

//Object.create creates an empty object with its prototype pointing at whatever you pass into Object.create
//you override whatever you want to by adding the properties and methods to the object
//Ex (Pure Prototypal Inheritance):
john.firstName = 'John';
john.lastName = 'Doe';
console.log(john);//{firstName: "John", lastName: "Doe"}
console.log(john.greet());//Hi John