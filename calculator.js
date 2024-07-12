"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Calculator {
    constructor() {
        this.prices = {
            red: 50,
            green: 40,
            blue: 30,
            yellow: 50,
            pink: 80,
            purple: 90,
            orange: 120,
        };
    }
    calculatePrice(order, hasMemberCard) {
        let total = 0;
        let discount = 0;
        for (let item in order) {
            if (order.hasOwnProperty(item)) {
                const quantity = order[item] || 0;
                const price = this.prices[item];
                total += price * quantity;
                if ((item === "orange" || item === "pink" || item === "green") &&
                    quantity >= 2) {
                    const bundles = Math.floor(quantity / 2);
                    //   console.log(bundles * 2 * price * 0.05);
                    discount += bundles * 2 * price * 0.05;
                }
            }
        }
        if (hasMemberCard) {
            discount += (total - discount) * 0.1;
        }
        // console.log(total);
        // console.log(discount);
        return total - discount;
    }
}
// const test = new Calculator();
// const order: Order = {
//   orange: 5,
// };
// const price = test.calculatePrice(order, false);
// console.log(price);
exports.default = Calculator;
