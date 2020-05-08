class Goods {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }
}

// e. Додавання товару в колекцію

exports.addingGoods = function addGoods (newGoods) {
    goods.push(newGoods)
};

// f. Редагування товару в колекції

exports.editingGoods = function editGoods (good, newName, newNumb) {
    good.name = newName;
    good.number = newNumb;
};

// g. Видалення товару з колекції

exports.deletingGoods = function deleteGoods (goods) {
    goods.forEach((value,index, array) => {
        if(goods.name === value.name &&
            goods.number === value.number ) array.splice(index, 1)
    })
};