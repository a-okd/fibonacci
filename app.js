'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
function fib0(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    return fib0(n - 1) + fib0(n - 2);
}

function fib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = fib(n - 1) + fib(n - 2);
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(i + "のフィボナッチ数は " + fib0(i) + " です。");
}