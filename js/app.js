//ARRAYS AND FOR IN
Array.prototype.myCustomFeature = 'cool!';

var arr = ['John', 'Jane', 'Jim'];

for(var prop in arr) {
    console.log(prop + ': ' + arr[prop]);
}
//0: John
//1: Jane
//2: Jim
//myCustomFeature: cool!

//O, 1, and 2 are the property names
//An array is an object, each item is a unique property in the array

//In the case of arrays don't use "for in" because it loops through the properties INCLUDING whatever prototypes are added to Array

//Instead use a regular for loop
for(var i = 0; i < arr.length; i++) {
    console.log(i + ': ' + arr[i]);
}
//0: John
//1: Jane
//2: Jim