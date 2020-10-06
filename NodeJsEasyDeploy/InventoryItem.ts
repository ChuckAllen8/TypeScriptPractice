import { Product } from "./Product";

export interface InventoryItem {
    product: Product;
    quantity: number;
}

export function calcInventoryValue(inventory: InventoryItem[]) {
    let total = 0;

    inventory.forEach(function (value) {
        total += (value.product.price * value.quantity);
    });

    return total;
}