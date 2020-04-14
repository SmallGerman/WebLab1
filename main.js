const {CharUp} = require('./Task 2');
const {Fib} = require('./Task 3');
const {Unique} = require('./Task 4');
const {MergeSort} = require('./Task 6');

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

// Task 6
let arr1 = [1, 4, 6, 7];
let arr2 = [2, 3, 5];
console.log(MergeSort(arr1, arr2));
let arr3 = ['ok', 'fine', 'good', 'space', 'instruction'];
let arr4 = ['mood', 'notice', 'breaking', 'cold'];
console.log(MergeSort(arr3, arr4));