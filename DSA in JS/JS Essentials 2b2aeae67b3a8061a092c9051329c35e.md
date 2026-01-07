# JS Essentials

Difficulty: Easy
Status: Completed
Category: Fundamental
Created time: November 21, 2025 11:18 AM
Last edited time: December 13, 2025 11:32 PM

## 👉 Questions

### 🎯 Sum of Two Integers

```jsx
let a = 10;
let b = 20;

console.log(a + b);
```

### 🎯 Sum and Message

```jsx
let a = 10;
let b = 20;

console.log(`The sum of ${a} & ${b} is ${a+b}`);
```

### 🎯 Accept input from the user and print the answer

```jsx
let prompt = require("prompt-sync")();

let age = prompt("Enter the age");
console.log(age);
```

### 🎯 Swap two variables using 3 variable method.

```jsx
let a = 10;
let b = 20;

console.log(`Before swapping: ${a}, ${b}`);

let temp = a;
a = b;
b = temp;

console.log(`After swapping: ${a}, ${b}`);
```

### 🎯 Swap two variables using 2 variable method.

```jsx
let a = 10;
let b = 20;

console.log(`Before swapping: ${a}, ${b}`);

a = a + b 
b = a - b; 
a = a - b; 

console.log(`After swapping: ${a}, ${b}`);
```

### 🎯 Swap two variables using destructuring method.

```jsx
let a = 10;
let b = 20;

console.log(`Before swapping: ${a}, ${b}`);

[a,b] = [b,a];

console.log(`After swapping: ${a}, ${b}`);
```

### 🎯 Compount Interest Calculation

- Accept the `Principal Amount(P)`, `Annual Interest(r)`, `the number of years(t)` and `the number of times the interest is compounded per year(n)`.
- Write a program to calculate the Compound Interest. The formula to calculate Compound Interest is
    - A = `P * (1 + r/n)**(n*t)`
- the Compund Interest is then calculated as `CI = A - P`.

```jsx
function calculateCompoundInterest(P, r, t, n) {
    let A = P * (1 + r/n)**(n*t);
    
    let CI = A - P;

    CI = CI.toFixed(2);
    
    console.log(CI);
}

calculateCompoundInterest(1000, 0.5, 10, 4);
```