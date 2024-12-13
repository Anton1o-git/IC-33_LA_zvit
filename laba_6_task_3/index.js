const fruits = [
    { name: "apple", price: 200 },
    { name: "orange", price: 300 },
    { name: "grapes", price: 750 },
];

const main = (products) => {
return products.map((product, index) => ({
    id: index + 1,
    name: product.name,
    price: product.price * 0.8,
    }));
};

const discountedFruits = main(fruits);
console.log(discountedFruits);
