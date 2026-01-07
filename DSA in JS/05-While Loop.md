# While Loop

## 👉 Questions

### 🎯 Sum of digits of a number.

```jsx
function sumOfDigit(n){
    let sum = 0;
    while(n > 0){
        let rem = n % 10;
        sum += rem;
        n = Math.floor(n / 10);
    }
    console.log(sum);
}

sumOfDigit(555);
```

### 🎯 Reverse of a number.

```jsx
function reverseNumber(n){
    let rev = 0;
    while(n > 0){
        let rem = n % 10;
        rev = (rev * 10) + rem;
        n = Math.floor(n / 10);
    }
    console.log(rev);
}

reverseNumber(98654);
```

### 🎯 To check if a number is a valid ISBN number.

```jsx
function isbn(n){
    let copy = n;
    let count = 0;
    while(n > 0){
        count++;
        n = Math.floor(n/10);
    }

    if(count != 10) console.log("ISBN number should be 10 digits");

    else{
        let ans = 0;
        while(copy > 0){
            let digit = copy % 10;
            ans = ans + (digit * count);
            count--;
            copy = Math.floor(copy/10);
        }
        
        console.log(ans % 11 == 0 ? "Valid ISBN" : "Invalid ISBN");
    }
}

isbn(1933988177);
```

### 🎯 To check if a number is automorphic or not.

```jsx
function automorphic(n){
    let count = 0;
    let copy = n;

    while(n > 0){
        count++;
        n = Math.floor(n / 10);
    }

    let sqr = copy * copy;
    let digit = sqr % 10**count;

    if(digit == copy) console.log("Automorphic");
    else console.log("Not Automorphic");
}

automorphic(100);
```

### 🎯 Reverse a number

```jsx
function reverseNumber(n){
    let rev = 0;
    while(n > 0){
        let digit = n % 10;
        rev = rev * 10 + digit;
        n = Math.floor(n / 10);
    }

    console.log(rev);
}

reverseNumber(987);
```