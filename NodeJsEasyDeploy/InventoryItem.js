"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcInventoryValue = void 0;
function calcInventoryValue(inventory) {
    let total = 0;
    inventory.forEach(function (value) {
        total += (value.product.price * value.quantity);
    });
    return total;
}
exports.calcInventoryValue = calcInventoryValue;
//# sourceMappingURL=InventoryItem.js.map