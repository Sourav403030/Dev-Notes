# Do While Loop

## 👉 Questions

### 🎯 Number guessing game

```jsx
let prompt = require("prompt-sync")()

let comp = Math.floor((Math.random()*100) + 1);
let attempts = 0;
let n;

do{
    attempts++;
    n = Number(prompt("Enter a number - "));

    if(n > comp) console.log("Too large");
    else if(n < comp) console.log("Too small");
    else if(n === comp) console.log(`Congratss!! You won in ${attempts} attempts`);
}while(n != comp);
```

### 🎯 Sasta Calculator

```jsx
let prompt = require("prompt-sync")()
let n;

do{
    console.log("Enter 1 for Addition\n Enter 2 for Subtraction\n Enter 3 for Multiplication\n Enter 4 for Division");
    n = Number(prompt("Enter your choice - "));
    let n1 = Number(prompt("Enter first number - "));
    let n2 = Number(prompt("Enter second number - "));

    switch(n){
        case 1 :{
            console.log(`The sum is ${n1+n2}`);
            break;
        }
        case 2: {
            console.log(`The difference is ${n1-n2}`);
            break;
        }

        case 3: {
            console.log(`The product is ${n1*n2}`);
            break;
        }
        case 4:{
            console.log(`The quotient is ${n1/n2}`);
            break;
        }
        default:{
            console.log("Invalid choice");
        }
    }

    n = prompt("type 'continue' to continue - ");
    
}while(n === "continue");
```