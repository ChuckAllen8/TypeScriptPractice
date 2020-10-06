function findNameOfTallestMountain(mountainArray) {
    var tallest = { name: "", height: 0 };
    mountainArray.forEach(function (value) {
        if (value.height > tallest.height) {
            tallest = value;
        }
    });
    return tallest.name;
}
function calcAverageProductPrice(products) {
    var sum = 0;
    products.forEach(function (value) {
        sum += value.price;
    });
    if (products.length > 0) {
        return sum / products.length;
    }
    return 0;
}
function calcInventoryValue(inventory) {
    var total = 0;
    inventory.forEach(function (value) {
        total += (value.product.price * value.quantity);
    });
    return total;
}
function TS_Start() {
    console.clear();
    console.log('Beginning Lab');
    console.log('');
    console.log('Mountain Problem');
    var mountains = [{ name: "Kilimanjaro", height: 19341 }, { name: "Everest", height: 29029 }, { name: "Denali", height: 20310 }];
    var mountainName = findNameOfTallestMountain(mountains);
    console.log('Tallest Mountain is ' + mountainName);
    console.log('');
    console.log('Product Problem');
    var products = [{ name: "Hyper Drive", price: 3000.00 }, { name: "Wormhole Drive", price: 4500.00 }, { name: "Jump Drive", price: 10000.00 }, { name: "Warp Drive", price: 3000.00 }];
    var average = calcAverageProductPrice(products);
    console.log('Average Product Price is ' + average);
    console.log('');
    console.log('Inventory Problem');
    var inventory = [{ product: { name: "motor", price: 10.00 }, quantity: 10 }, { product: { name: "sensor", price: 12.50 }, quantity: 4 }, { product: { name: "LED", price: 1.00 }, quantity: 20 }];
    var total = calcInventoryValue(inventory);
    console.log('Total Inventory value ' + total);
    console.log('');
    console.log('');
    console.log('Extra arbitrary practice');
    var meeple = { name: "Station", height: 10000, price: 1000000, product: { name: "Custom Ship", price: 10000 }, quantity: 1 };
    var arbitrary = [meeple];
    console.log('As long as the non-typed object has the right fields it works! ' + findNameOfTallestMountain(arbitrary));
    console.log('As long as the non-typed object has the right fields it works! ' + calcAverageProductPrice(arbitrary));
    console.log('As long as the non-typed object has the right fields it works! ' + calcInventoryValue(arbitrary));
    console.log('');
    console.log('Different loop type.');
    console.log('All the mountains were');
    for (var _i = 0, mountains_1 = mountains; _i < mountains_1.length; _i++) {
        var mount = mountains_1[_i];
        console.log(mount.name);
    }
}
//# sourceMappingURL=app.js.map