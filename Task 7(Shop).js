class Shop {
    constructor(name, specialization, goods) {
        this.name = name;
        this.goods = goods;
        this.specialization = specialization;
    }

}

// Додавання нового магазину в колекцію

exports.addingNewShop = function addNewShop(newShop) {
    shops.push(newShop)
};

// b. Редагування магазину в колекції
exports.editingShop = function editShop(shop, newName, newSpace) {
    shop.name = newName;
    shop.specialization = newSpace;
};

// c. Видалення магазину з колекції
exports.deletingShop = function deleteShop (shop) {
    shops.forEach((value,index, array) => {
        if(shop.name === value.name &&
            shop.specialization === value.specialization ) array.splice(index, 1)
    })
};

// d. Пошук одного магазину в колекції

exports.findingShop = function findShop(shop) {
    let aweShop;
    shops.forEach((value,index, array) => {
        if(shop.name === value.name &&
            shop.specialization === value.specialization ) aweShop = value;
    })
};

// p. Відвантаження товару в магазин із складу

exports.goodForShop = function goodsForShop (shop, store, good) {
    let aweGood;
    stores.filter((value, index) => {
        if(value === store) {
            let mas = store.goods;
            mas.forEach((product, ind, arr) =>{
                if(product === good.number){
                    aweGood = arr.splice(ind, 1)
                }
            })
        }
    });
    shops.filter(value => {
        if(value === shop) shop.goods.push(aweGood[0])
    })

};