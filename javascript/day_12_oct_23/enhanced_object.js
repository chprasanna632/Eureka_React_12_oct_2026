function createLaptop(brand, model, price) {
    return { // es_5
        brand: brand,
        model: model,
        price: price,
    }
}
console.log(createLaptop('Hp', 'Probook', 40000));

function prepareLaptop(brand, model, price) {
    return { brand, model, price }; // es_6
}
console.log(prepareLaptop('Hp', 'Probook', 40000));