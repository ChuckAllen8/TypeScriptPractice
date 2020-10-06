"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mountain_1 = require("./Mountain");
const Product_1 = require("./Product");
const InventoryItem_1 = require("./InventoryItem");
console.log('Beginning Lab');
console.log('');
console.log('Mountain Problem');
let mountains = [{ name: "Kilimanjaro", height: 19341 }, { name: "Everest", height: 29029 }, { name: "Denali", height: 20310 }];
let name = Mountain_1.findNameOfTallestMountain(mountains);
console.log('Tallest Mountain is ' + name);
console.log('');
console.log('Product Problem');
let products = [{ name: "Hyper Drive", price: 3000.00 }, { name: "Wormhole Drive", price: 4500.00 }, { name: "Jump Drive", price: 10000.00 }, { name: "Warp Drive", price: 3000.00 }];
let average = Product_1.calcAverageProductPrice(products);
console.log('Average Product Price is ' + average);
console.log('');
console.log('Inventory Problem');
let inventory = [{ product: { name: "motor", price: 10.00 }, quantity: 10 }, { product: { name: "sensor", price: 12.50 }, quantity: 4 }, { product: { name: "LED", price: 1.00 }, quantity: 20 }];
let total = InventoryItem_1.calcInventoryValue(inventory);
console.log('Total Inventory value ' + total);
console.log('');
console.log('');
console.log('Extra arbitrary practice');
let meeple = { name: "Station", height: 10000, price: 1000000, product: { name: "Custom Ship", price: 10000 }, quantity: 1 };
let arbitrary = [meeple];
console.log('As long as the non-typed object has the right fields it works! ' + Mountain_1.findNameOfTallestMountain(arbitrary));
console.log('As long as the non-typed object has the right fields it works! ' + Product_1.calcAverageProductPrice(arbitrary));
console.log('As long as the non-typed object has the right fields it works! ' + InventoryItem_1.calcInventoryValue(arbitrary));
console.log('');
console.log('All the mountains were');
for (let mount of mountains) {
    console.log(mount.name);
}
//# sourceMappingURL=app.js.map