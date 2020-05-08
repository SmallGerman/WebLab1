const {CharUp} = require('./Task 2');
const {Fib} = require('./Task 3');
const {Unique} = require('./Task 4');
const {subtraction} = require('./Task 5');
const {Split} = require('./Task 6');
const {addingNewShop} = require('./Task 7(Shop)');
const {editingShop} = require('./Task 7(Shop)');
const {deletingShop} = require('./Task 7(Shop)');
const {findingShop} = require('./Task 7(Shop)');
const {goodForShop} = require('./Task 7(Shop)');
const {addingStore} = require('./Task 7(Store)');
const {editingStores} = require('./Task 7(Store)');
const {deletingStore} = require('./Task 7(Store)');
const {findingStore} = require('./Task 7(Store)');
const {deliveringGoods} = require('./Task 7(Store)');
const {deletingGoodsInStore} = require('./Task 7(Store)');
const {transferringGoods} = require('./Task 7(Store)');
const {findingGoods} = require('./Task 7(GoodsAtTheStore)');
const {addingGoods} = require('./Task 7(Goods)');
const {editingGoods} = require('./Task 7(Goods)');
const {deletingGoods} = require('./Task 7(Goods)');


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

// Task 7
let shops = [new Shop('Drugdealer', 'drugs', []), new Shop('Max', 'ammo',[])];
let stores = [new Store(1, 1,  [33]), new Store(2, 12, [])];
let goods = [new Goods('cox', 12323), new Goods('block', 6578)];
let GoodsAtTheStores = [];

console.log(goodForShop());
console.log(findingShop());
console.log(deletingShop());
console.log(editingShop());
console.log(addingNewShop());
console.log(addingStore());
console.log(editingStores());
console.log(deletingStore());
console.log(findingStore());
console.log(deliveringGoods());
console.log(deletingGoodsInStore());
console.log(transferringGoods());
console.log(findingGoods());
console.log(addingGoods());
console.log(editingGoods());
console.log(deletingGoods());