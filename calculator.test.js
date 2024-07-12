"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculator_1 = __importDefault(require("./calculator"));
test("calculate price without member card", () => {
    const calc = new calculator_1.default();
    const order = {
        red: 1,
        green: 1,
    };
    const price = calc.calculatePrice(order, false);
    expect(price).toBe(90);
});
test("calculate price with member card", () => {
    const calc = new calculator_1.default();
    const order = {
        red: 1,
        green: 1,
    };
    const price = calc.calculatePrice(order, true);
    expect(price).toBe(81); // 90 * (1 - 0.10) = 81
});
test("calculate price with bundle discount", () => {
    const calc = new calculator_1.default();
    const order = {
        orange: 5,
    };
    const price = calc.calculatePrice(order, false);
    expect(price).toBe(576); // (5 * 120) - (2 * 120 * 0.05) = 600 - 24 = 576
});
test("calculate price with both member card and bundle discount", () => {
    const calc = new calculator_1.default();
    const order = {
        orange: 4,
        green: 1,
    };
    const price = calc.calculatePrice(order, true);
    expect(price).toBe(446.4); // ((4 * 120) + (40 + 1) - (4 * 120 * 0.05)) * 0.9 = (520 - 24)*0.9 = 446.4
});
