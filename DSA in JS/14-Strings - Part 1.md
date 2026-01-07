# Strings - Part 1

- Strings are not `Array of characters`. They just show some of the behaviour of the arrays.
- Strings are `immutable`. If you want to change the value of a string, then you need to re-assign the new value.

```jsx
// Wrong❌
let s = "Ranjeet";
s[3] = "t";

//Right✅
let s = "Ranjeet";
s = "Sam";
```

## 👉 String Methods

### 🎯 `length()`

- Returns the **number of characters** in a string.
- Includes spaces and special characters.

```jsx
let str = "JavaScript";
console.log(str.length); // 10
```

### 🎯 `slice(start, end)`

- Extracts a **part of a string** and returns a new string.
- End index is **not included.**
- Supports **negative indexes.**

```jsx
let str = "JavaScript";
str.slice(-6); // "Script"
```

### 🎯 `substring(start, end)`

- Similar to slice, but with limitations.
- ❌ No negative indexes.
- If start > end, it swaps them automatically.

```jsx
let str = "JavaScript";
str.substring(4, 0); // "Java"
```

### 🎯 `substr(start, end)` ⚠️ Deprecated

- Extracts a substring based on **start index and length**.

```jsx
let str = "JavaScript";
console.log(str.substr(4, 6)); // "Script"
```

### 🎯  `toUpperCase()`

- Converts the string to **uppercase**.
- Does not change original string (strings are immutable).

```jsx
let str = "hello";
console.log(str.toUpperCase()); // "HELLO"
```

### 🎯  `toLowerCase()`

- Converts the string to **lowercase**.
- Very useful for **case-insensitive comparisons**.

```jsx
let str = "HELLO";
console.log(str.toLowerCase()); // "hello"
```

### 🎯 `concat()`

- Joins two or more strings.

```jsx
let a = "Hello";
let b = "World";
console.log(a.concat(" ", b)); // "Hello World"
```

### 🎯 `trim()`

- Removes **spaces from both ends** of a string.

```jsx
let str = "   hello world   ";
console.log(str.trim()); // "hello world"
```

### 🎯  `indexOf()`

- Returns the **index of the first occurrence** of a substring.

```jsx
let str = "JavaScript";
console.log(str.indexOf("S")); // 4
```

### 🎯 `lastIndexOf()`

- Returns the **last occurrence index** of a substring.

```jsx
let str = "banana";
console.log(str.lastIndexOf("a")); // 5
```

### 🎯 `includes()`

- Checks if a string **contains** a substring.
- Case-sensitive
- Returns boolean (true / false)

```jsx
let str = "JavaScript";
console.log(str.includes("Script")); // true
```

### 🎯 `startsWith()`

- Checks if a string **starts with** a specific substring.

```jsx
let str = "https://google.com";
console.log(str.startsWith("https")); // true
```

### 🎯 `endsWith()`

- Checks if a string **ends with** a specific substring.

```jsx
let str = "file.pdf";
console.log(str.endsWith(".pdf")); // true
```

### 🎯 `replace(old, new)`

- Replaces the **first occurrence** of a substring.
- Only replaces **first match**
- Does not modify original string

```jsx
let str = "hello world world";
console.log(str.replace("world", "JS"));
// "hello JS world"
```

### 🎯 `replaceAll(old, new)`

- Replaces **all occurrences** of a substring.

```jsx
let str = "hello world world";
console.log(str.replaceAll("world", "JS"));
// "hello JS JS"
```

### 🎯 `split(separator)`

- Splits a string into an **array**.

```jsx
let str = "a,b,c";
console.log(str.split(",")); // ["a", "b", "c"]
```

### 🎯 `charAt(index)`

- Returns the character at a given index.

```jsx
let str = "JavaScript";
console.log(str.charAt(4)); // "S"
```

### 🎯 `charCodeAt(index)`

- Returns the **Unicode (ASCII) value** of a character.

```jsx
let str = "A";
console.log(str.charCodeAt(0)); // 65
```

## 👉 Questions

### 🎯 Accept a string from the user and print its each character on a new line.

```jsx
function printChars(str){
    for(let i = 0; i < str.length; i++){
        console.log(str[i]);
    }
}

printChars("welcome");
```

### 🎯 Accept a string and print it in reverse order.

```jsx
function reverse(str){
    let rev = ''
    for(let i = str.length - 1; i >= 0; i--){
        rev = rev + str[i];
    }

    console.log(rev);
}

reverse("welcome");
```

### 🎯 Palindrome string using two pointer algorithm

```jsx
function palindrome(str){
    let palindrome = true;
    let i = 0;
    let j = str.length - 1;
    while(i < j){
        if(str[i] != str[j]){
            palindrome = false;
            break;
        }
        i++;
        j--;
    }

    if(palindrome == true) console.log("Palindrome");
    else console.log("Not Palindrome");
}

palindrome("malayalam");
```