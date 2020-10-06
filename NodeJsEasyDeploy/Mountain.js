"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findNameOfTallestMountain = void 0;
function findNameOfTallestMountain(mountainArray) {
    let tallest = { name: "", height: 0 };
    mountainArray.forEach(function (value) {
        if (value.height > tallest.height) {
            tallest = value;
        }
    });
    return tallest.name;
}
exports.findNameOfTallestMountain = findNameOfTallestMountain;
//# sourceMappingURL=Mountain.js.map