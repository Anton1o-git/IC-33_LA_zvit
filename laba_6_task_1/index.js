function createProduct(obj, callback) {
    const product = {
      ...obj,
      id: Date.now(),
    };
    callback(product);
}

const logProduct = (product) => {
console.log('Продукт:', product);
};

const logTotalPrice = (product) => {
console.log('Загальна вартість:', product.price * product.quantity);
};

const newProduct = {
    name: 'Смартфон',
    price: 10000,
    quantity: 3,
};

createProduct(newProduct, logProduct);
createProduct(newProduct, logTotalPrice);
