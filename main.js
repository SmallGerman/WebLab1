const {CharUp} = require('./Task 2');
const {Fib} = require('./Task 3');
const {Unique} = require('./Task 4');
const {subtraction} = require('./Task 5');
const {Split} = require('./Task 6');

// Task 1
let bio = ['im', 'smallgerman', 'or', 'apcikk', 'but', 'call', 'me', 'boss', 'of', 'the', 'gym'];
console.log(bio.join(' '));

// Task 2
console.log(CharUp('the war in thailand characterises hell'));

// Task 3
console.log(Fib(1));
console.log(Fib(2));
console.log(Fib(3));
console.log(Fib(4));
console.log(Fib(5));

// Task 4
let arr = ['lol', 'kek', 'lmao', 'kek', 'kek', 'kekw', 'lol'];
console.log(Unique(arr));

// Task 5
let first = new Date(2020, 11, 12); //month from 0
let second = new Date(2019, 11, 5);


subtraction(first, second);

// Task 6
let array = [5, 1, 9, 2, 6, 2, 7];
let array1 = ['apple', 'zebra', 'clinic', 'sister', 'mouse', 'banana'];
console.log(Split(array));
console.log(Split(array1));