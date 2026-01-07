# For Loop

Difficulty: Easy
Status: Completed
Category: Fundamental
Created time: December 1, 2025 12:37 PM
Last edited time: December 20, 2025 11:58 PM

## 👉 Questions

### 🎯 Print Natural numbers from 1 to N.

```jsx
function printNaturalNumbers(n){
    for(let i = 1; i <= n; i++){
        console.log(i); 
    }
}

printNaturalNumbers(10);
```

### 🎯 Print Natural numbers from N to 1.

```jsx
function printNaturalNumbers(n){
    for(let i = n; i >= 1; i--){
        console.log(i);
    }
}

printNaturalNumbers(5);
```

### 🎯 Sum upto N terms.

```jsx
function sumOfTerms(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i;
    }
    console.log(sum);
}

sumOfTerms(5);
```

### 🎯 Factorial of a number.

```jsx
function factorial(n){
    if(n == 0) return 1;

    let result = 1;
    for(let i = n; i >= 1; i--){
        result *= i;
    }
    console.log(result);
}

factorial(5);
```

### 🎯 Print all factors of a number.

```jsx
function printFactors(n){
    for(let i = 1; i <= n; i++){
        if(n % i == 0){
            console.log(i);
        }
    }
}

printFactors(20);
```

### 🎯 Sum of even and odd numbers in a range.

```jsx
function evenOdd(a,b){
    let sumEven = 0;
    let sumOdd = 0;

    for(let i = a; i <= b; i++){
        if(i % 2 == 0) sumEven += i;
        else sumOdd += i;
    }

    return {sumEven, sumOdd};
}
```