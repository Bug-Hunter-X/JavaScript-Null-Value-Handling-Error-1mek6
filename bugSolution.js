function foo(a, b) {
  // Handle null values using the nullish coalescing operator
  a = a ?? 0; // If a is null or undefined, use 0
  b = b ?? 0; // If b is null or undefined, use 0

  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0
console.log(foo(undefined, 2)); // Output: 2
console.log(foo(1, undefined)); // Output: 1
console.log(foo(undefined, undefined)); // Output: 0