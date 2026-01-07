# Math Functions

### 🎯 `Math.round()`

- Rounds a number to the nearest integer.
- ≥ .5 → rounds up
- < .5 → rounds down

```jsx
Math.round(4.7); // 5
Math.round(4.4); // 4
Math.round(10.5); // 11
```

### 🎯 `Math.ceil()`

- Always rounds up to the next integer.

```jsx
Math.ceil(4.1); // 5
Math.ceil(7.9); // 8
Math.ceil(-2.3); // -2   (moves UP toward +∞)
```

### 🎯 `Math.floor()`

- Always rounds down to the previous integer.

```jsx
Math.floor(4.9); // 4
Math.floor(7.1); // 7
Math.floor(-2.3); // -3   (moves DOWN toward -∞)
```

### 🎯 `Math.trunc()`

- Just remove the decimal part - no rounding at all.

```jsx
Math.trunc(4.9); // 4
Math.trunc(7.1); // 7
Math.trunc(-2.9); // -2
```

### 🎯 `Math.pow(base, exponent)`

- Raise a number to a power.

```jsx
Math.pow(2, 3); // 8
Math.pow(5, 2); // 25
```

### 🎯 `Math.sqrt()`

- Square root of a number.

```jsx
Math.sqrt(25); // 5
Math.sqrt(2);  // 1.41421356
```

### 🎯 `Math.cbrt()`

- Cube root of a number.

```jsx
Math.cbrt(27); // 3
Math.cbrt(8);  // 2
Math.cbrt(64); // 4
```

### 🎯 `Math.abs()`

- Returns absolute value (Always positive).

```jsx
Math.abs(-10); // 10
Math.abs(5);   // 5
Math.abs(-3.8); // 3.8
```

### 🎯 `Math.max()`

- Returns the maximum value.

```jsx
Math.max(10, 5, 20, 3); // 20
```

### 🎯 `Math.min()`

- Returns the smallest number in a list.

```jsx
Math.min(10, 5, 20, 3); // 3
```

### 🎯 `Math.random()`

- Returns a random number between 0 & 1. (not including 1).

```jsx
Math.random(); 
// e.g., 0.584473939 (changes every time)
```

### 🎯 `toFixed()`

- Formats a number to a fixed number of decimal places.
- It returns a string, not a number.

```jsx
let num = 10.56789;

num.toFixed(2); // "10.57"
num.toFixed(4); // "10.5679"
```

## ❓ Questions

### 👉 Generate a 4 digit OTP

```jsx
let otp = (Math.random()*9000)+1000;
otp = Math.floor(otp);

console.log(`Your OTP is: ${otp}`);
```

### 👉 Area of a Triangle by Heron’s formula

```jsx
let prompt = require("prompt-sync")()

let a = +prompt("Enter the first side: ");
let b = +prompt("Enter the second side: ");
let c = +prompt("Enter the third side: ");

let s = (a + b + c) / 2; 

let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

console.log(`The area of the triangle is ${area}`);
```

### 👉 Circumference of a Circle

```jsx

let prompt = require("prompt-sync")()

let r = +prompt("Enter the radius: ");

let cir = 2 * Math.PI * r;

console.log(`The circumference of the circle is: ${cir}`);
```