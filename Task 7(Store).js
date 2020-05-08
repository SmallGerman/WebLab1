class Store {
    constructor(number, numberGoods, goods) {
        this.goods = goods;
        this.number = number;
        this.numberGoods = numberGoods;
    }
}

// i. Додавання складу в колекцію

exports.addingStore = function addStore(store) {
    stores.push(store)
};

// j. Редагування складу в колекції

exports.editingStores = function editStores(store, number) {
    store.number = number;
};

// k. Видалення складу з колекції

exports.deletingStore = function deleteStore(store) {
    stores.filter((value, index) => {
        if(value === store) stores.splice(index,1)
    })
};

// l. Пошук складу в колекції

exports.findingStore = function  findStore (store) {
    stores.filter((value, index) => {
        if(value === store) console.log(`Наш магазин з номером ${value.number}`)
    });
    console.log(store);
};

// m. Доставка товару на склад

exports.deliveringGoods = function deliveredGoods (good, store) {
    stores.filter((value, index) => {
        if(value === store) value.goods.push(good.number);
    });
};

// n. Видалення товару зі складу

exports.deletingGoodsInStore = function deleteGoodsInStore (good, store) {
    stores.filter((value, index) => {
        if(value === store) {
            let mas = store.goods;
            mas.forEach((product, ind, arr) =>{
                if(product === good.number){
                    arr.splice(ind, 1)
                }
            })
        }
    });
};

// o. Трансфер товару із складу на склад

exports.transferringGoods = function transferGoods (fromStore, toStore, good) {
    let delivered;
    stores.filter(value => {
        if(value === fromStore) {
            let mas = fromStore.goods;
            mas.forEach((product, index, arr) =>{
                if(product === good.number)  delivered = arr.splice(index, 1)
            })
        }
    });
    stores.filter(value => {
        if (value === toStore){
            value.goods.push(delivered[0])
        }
    });
};