"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcAverageProductPrice = void 0;
function calcAverageProductPrice(products) {
    let sum = 0;
    products.forEach(function (value) {
        sum += value.price;
    });
    if (products.length > 0) {
        return sum / products.length;
    }
    return 0;
}
exports.calcAverageProductPrice = calcAverageProductPrice;
//# sourceMappingURL=Product.js.map