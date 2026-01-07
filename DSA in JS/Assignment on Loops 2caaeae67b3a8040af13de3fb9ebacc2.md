# Assignment on Loops

Difficulty: Easy
Status: Completed
Category: Fundamental
Created time: December 15, 2025 10:42 AM
Last edited time: December 17, 2025 12:02 PM

## 👉 Questions

### 🎯 Harshad Number Check.

```jsx
function harshadNumber(n){
    let rem;
    let digit = 0;
    let cpy = n;
    while(n > 0){
        rem = n % 10;
        digit += rem;
        n = Math.floor(n / 10);
    }

    if(cpy % digit == 0) console.log("Harshad");
    else console.log("Not Harshad");

}

harshadNumber(21);
```

### 🎯 Abundant Number Checker.

```jsx
function abundantNumber(n){
    let sum = 0;

    for(let i = 1; i < n; i++){
        if(n % i == 0){
            sum += i;
        }
    }

    if(sum > n) console.log("Abundant");
    else console.log("Not Abundant");
}

abundantNumber(12);
```

### 🎯 Check if a number is a Neon number.

```jsx
function neon(n){
    let square = n * n;
    let digit = 0;
    while(square > 0){
        let rem = square % 10;
        digit += rem;
        square = Math.floor(square / 10);
    }

    if(digit == n) console.log("Neon");
    else console.log("Not Neon");

}

neon(9);
```

### 🎯 Armstrong Number Checker

```jsx
function armstrong(n){
    let temp = n;
    let digit = n.toString().length;
    let sum = 0;
    while(n > 0){
        let rem = n % 10;
        sum += rem ** digit;
        n = Math.floor(n / 10);
    }

    if(sum == temp) console.log("Armstrong");
    else console.log("Not Armstrong");
}

armstrong(153);
```