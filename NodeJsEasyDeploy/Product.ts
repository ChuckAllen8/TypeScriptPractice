export interface Product {
    name: string;
    price: number;
}

export function calcAverageProductPrice(products: Product[]) {
    let sum = 0;

    products.forEach(function (value) {
        sum += value.price;
    });

    if (products.length > 0) {
        return sum / products.length;
    }

    return 0;
}