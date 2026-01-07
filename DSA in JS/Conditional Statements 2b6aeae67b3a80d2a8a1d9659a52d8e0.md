# Conditional Statements

Difficulty: Easy
Status: Completed
Category: Fundamental
Created time: November 25, 2025 11:43 AM
Last edited time: December 20, 2025 12:15 PM

## 👉 Questions

### 🎯 Accept two numbers and print the greatest between them.

```jsx
lfunction greatest(a,b){
    if(a > b) return a;
    if(a < b) return b;
    else return "Equal";
}
```

### 🎯 Accept an Integer and check whether it is even or odd number.

```jsx
function evenOdd(n){
    if(n % 2 == 0) return "Even";
    else return "Odd";
}
```

### 🎯 Accept name and age from the user. Check if the user is a valid voter or not.

```jsx
function validVoter(name, age){
    if(age >= 18) return `${name} is a valid voter`;
    else return `${name} is not a valid voter`;
}
```

### 🎯 Accept 3 numbers and print the greatest among them.

```jsx
function greatest(a,b,c){
    if(a > b && a > c) return a;
    else if(b > a && b > c) return b;
    else if(c > a && c > b) return c;
    else return "Invalid input";
}
```

### 🎯 Accept a year and check if it is a leap year or not.

```jsx
function leapYear(n){
    if(n % 400 == 0 || (n % 4 == 0 && n % 100 !== 0)) return "Leap Year"
    else return "Not Leap Year";
}
```

### 🎯 Count number of days in a given month of a year.

```jsx

function daysInMonth(year,month){
    if(month == 2){
        if(year % 400 == 0 || (year % 4 == 0 && year % 100 !== 0)) return 29;
        else return 28;
    }

    if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) return 31;
    if(month == 2 || month == 4 || month == 6 || month == 9 || month == 11) return 30;

}
```

### 🎯 Shop Discount

- 0 - 5000 → 0% discount
- 5001 - 7000 → 5% discount
- 7001 - 9000 → 10% discount
- 9000+ → 20% discount

```jsx
function discount(price){
    let dis = 0;

    if(price > 0 && price <= 5000) dis = 0;
    else if(price > 5000 && price <= 7000) dis = 5;
    else if(price > 7000 && price <= 9000) dis = 10;
    else dis = 20;

    return `The discounted price is ${price - (price * dis/100)}`;
}
```

### 🎯 Bijlee Bill

- uptp 100 → ₹4.2/unit
- 101 - 200 → ₹6/unit
- 201 - 400 → ₹8/unit
- 400+ → ₹13/unit

```jsx
function calculateBijleeBill(units){
    let bill = 0;

    if (units > 400) {
        bill += (units - 400) * 13;
        units = 400;
    }
    if (units > 200) {
        bill += (units - 200) * 8;
        units = 200;
    }
    if (units > 100) {
        bill += (units - 100) * 6;
        units = 100;
    }

    bill += units * 4.2;

    return bill;
}

console.log(calculateBijleeBill(250));
```