interface Mountain {
    height: number;
    name: string;
}

function findNameOfTallestMountain(mountainArray: Mountain[]) {
    let tallest: Mountain = { name: "", height: 0 };

    mountainArray.forEach(function (value) {
        if (value.height > tallest.height) {
            tallest = value;
        }
    });

    return tallest.name;
}

interface Product {
    name: string;
    price: number;
}

function calcAverageProductPrice(products: Product[]) {
    let sum = 0;

    products.forEach(function (value) {
        sum += value.price;
    });

    if (products.length > 0) {
        return sum / products.length;
    }

    return 0;
}

interface InventoryItem {
    product: Product;
    quantity: number;
}

function calcInventoryValue(inventory: InventoryItem[]) {
    let total = 0;

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
    let mountains: Mountain[] = [{ name: "Kilimanjaro", height: 19341 }, { name: "Everest", height: 29029 }, { name: "Denali", height: 20310 }];
    let mountainName = findNameOfTallestMountain(mountains);
    console.log('Tallest Mountain is ' + mountainName);
    console.log('');

    console.log('Product Problem');
    let products: Product[] = [{ name: "Hyper Drive", price: 3000.00 }, { name: "Wormhole Drive", price: 4500.00 }, { name: "Jump Drive", price: 10000.00 }, { name: "Warp Drive", price: 3000.00 }]
    let average = calcAverageProductPrice(products);
    console.log('Average Product Price is ' + average);
    console.log('');

    console.log('Inventory Problem');
    let inventory: InventoryItem[] = [{ product: { name: "motor", price: 10.00 }, quantity: 10 }, { product: { name: "sensor", price: 12.50 }, quantity: 4 }, { product: { name: "LED", price: 1.00 }, quantity: 20 }];
    let total = calcInventoryValue(inventory);
    console.log('Total Inventory value ' + total);
    console.log('');
    console.log('');

    console.log('Extra arbitrary practice');
    let meeple = { name: "Station", height: 10000, price: 1000000, product: { name: "Custom Ship", price: 10000 }, quantity: 1 };
    let arbitrary = [meeple];
    console.log('As long as the non-typed object has the right fields it works! ' + findNameOfTallestMountain(arbitrary))
    console.log('As long as the non-typed object has the right fields it works! ' + calcAverageProductPrice(arbitrary))
    console.log('As long as the non-typed object has the right fields it works! ' + calcInventoryValue(arbitrary))

    console.log('');
    console.log('Different loop type.');
    console.log('All the mountains were');
    for (let mount of mountains) {
        console.log(mount.name);
    }
}