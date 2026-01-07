# Pattern Programming

## 👉 Questions

### 🎯  Print stars in n number of lines.

```jsx
*
*
*
*
*
```

```jsx
function printStar(n){
    for(let i = 1; i <= n; i++){
        console.log("*");
    }
}

printStar(5);
```

### 🎯 Print stars in a box shape.

```jsx
* * * * * * 
* * * * * * 
* * * * * * 
* * * * * * 
* * * * * * 
* * * * * * 
```

```jsx
fcodeion printStars(n){
    for(let i = 1; i<= n; i++){
        for(let j = 1; j <= n; j++){
            process.stdout.write("* ");
        }
        console.log();
    }
}

printStars(6);
```

### 🎯 Right angle triangle.

```jsx
* 
* * 
* * * 
* * * * 
* * * * * 
* * * * * *
```

```jsx
function printStars(n){
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= i; j++){
            process.stdout.write("* ");
        }

        console.log();
    }
}

printStars(6);
```

### 🎯 Right angle triangle with numbers.

```jsx
1
12
123
1234
12345
123456
```

```jsx
function printStars(n){
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= i; j++){
            process.stdout.write(j.toString());
        }
        console.log();
    }
}

printStars(6);
```

### 🎯 Right angle triangle with alphabets.

```jsx
A
AB
ABC
ABCD
ABCDE
ABCDEF
```

```jsx
function printStars(n){
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= i; j++){
            let alphabet = String.fromCharCode(j + 64);
            process.stdout.write(alphabet);
        }
        console.log();
    }
}

printStars(6);
```

### 🎯 Inverted right angle triangle.

```jsx
* * * * * * 
* * * * * 
* * * * 
* * * 
* * 
*
```

```jsx
function printStars(n){
    for(let i = 1; i <= n; i++){
        for(let j = n; j >= i; j--){
            process.stdout.write("* ");
        }

        console.log();
    }
}

printStars(6);
```

### 🎯 Mirror Right angle triangle.

```jsx
            * 
          * * 
        * * * 
      * * * * 
    * * * * * 
  * * * * * * 
```

```jsx
function printStars(n){
    for(let i = 1; i <= n; i++){
        // Print spaces for right alignment
        for(let j = n; j >= i; j--){
            process.stdout.write("  ");
        }
        // Print stars
        for(let j = 1; j <= i; j++){
            process.stdout.write("* ");
        }
        console.log();
    }
}
```

### 🎯 X shape

```jsx
*         * 
  *     *   
    * *     
    * *     
  *     *   
*         * 
```

```jsx
function printStars(n){
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= n; j++){
            if((i == j) || (i+j == n+1)) process.stdout.write("* ");
            else process.stdout.write("  ");
        }
        console.log(); // Add newline after each row
    }
}

printStars(6);
```

### 🎯 V shape

```jsx
*                   * 
  *               *   
    *           *     
      *       *       
        *   *         
          * 
```

```jsx
function printStars(n){
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= n*2-1; j++){
            if((i == j) || (i+j == n*2)) process.stdout.write("* ");
            else process.stdout.write("  ");
        }
        console.log(); // Add newline after each row
    }
}

printStars(6);
```