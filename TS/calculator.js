"use strict";
class calculator {
    add(a, b) {
        return a + b;
    }
    Sub(a, b) {
        return a - b;
    }
    Mul(a, b) {
        return a * b;
    }
    Div(a, b) {
        return a / b;
    }
}
let c = new calculator();
console.log(c.add(10, 20));
console.log(c.Sub(10, 20));
console.log(c.Mul(10, 20));
console.log(c.Div(10, 20));
