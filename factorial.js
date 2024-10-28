function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Expected output: 120
console.log(factorial(0)); // Expected output: 1
console.log(factorial(7)); // Expected output: 5040
