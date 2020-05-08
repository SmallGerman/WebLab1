class GoodsAtTheStore {
    constructor(number, goods, shop) {
        this.number = number;
        this.goods = goods;
        this.shop = shop;
    }
}

// h. Пошук одного товару в колекції

exports.findingGoods = function findGoods(good) {
    let aweGoods;
    goods.forEach((value,index, array) => {
        if(good.name === value.name &&
            good.number === value.number ) aweGoods = value;
    })
};