# Strings Questions

Difficulty: Easy
Status: In Progress
Category: Strings
Created time: January 5, 2026 11:40 AM
Last edited time: January 6, 2026 1:34 PM

## 👉 Questions

### 🎯 Count Asterisks

![Screenshot 2026-01-05 at 11.41.14 AM.png](Strings%20Questions/Screenshot_2026-01-05_at_11.41.14_AM.png)

```jsx
function countAsteriks(str){
  let count = 0;
  for(let i = 0; i < str.length; i++){
    if(str[i] == "|"){
      let start = i;
      let start2 = i+1;
      for(let j = start2; j < str.length; j++){
        if(str[j] == "|"){
          let start3 = j;
          for(let k = start3 + 1; k < str.length; k++ ){
            if(str[k] == "*"){
              count++;
            }
          }
        }
      }
    }
  }
  console.log(count);
}

countAsteriks("yo|uar|e**lble***aultifull"); // 5

countAsteriks("you|**abcdfg**|**bghdbs**ngc**"); // 6
```

### 🎯 Percentage of a Letter in a String.

```jsx
function percentage(str, letter){
  let strLen = str.length;
  let letterCount = 0;

  for(let i = 0; i < str.length; i++){
    if(str[i] == letter){
      letterCount++;
    }
  }

  let percentage = Math.floor((letterCount / strLen) * 100);

  console.log(percentage);
}

percentage("hello", "l"); // 40
```

### 🎯 Check if all A’s appear before all B’s

- Return true if all A’s appear before all B’s
- Return false otherwise.

```jsx
function checkAandB(str){
  let seenB = false;

  for(let i = 0; i < str.length; i++){
    if(str[i] === "b"){
      seenB = true;
    }
    else if(str[i] === "a" && seenB == true){
      return false;
    }
  }

  return true;
}

console.log(checkAandB("ababababa")); // false
console.log(checkAandB("aaaaabbbbb")); // true
```

### 🎯 Strong Password Checker

![Screenshot 2026-01-06 at 1.31.27 PM.png](Strings%20Questions/Screenshot_2026-01-06_at_1.31.27_PM.png)

```jsx
function strongPassword(pass) {
  let passLen = pass.length;
  let lowerAlph = "abcdefghijklmnopqrstuvwxyz";
  let upperAlph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "0123456789";
  let specialCh = "!@#$%^&*()-+";

  let isLower = false;
  let isUpper = false;
  let isNumber = false;
  let isSpecial = false;
  let hasAdjacentDuplicate = false;

  let strong = false;

  if (passLen >= 8) {
    for (let i = 0; i < pass.length; i++) {
      if (pass[i] == pass[i + 1]) hasAdjacentDuplicate = true;

      if (lowerAlph.includes(pass[i])) {
        isLower = true;
      } else if (upperAlph.includes(pass[i])) {
        isUpper = true;
      } else if (numbers.includes(pass[i])) {
        isNumber = true;
      } else if (specialCh.includes(pass[i])) {
        isSpecial = true;
      }
    }
    if (!hasAdjacentDuplicate && isLower && isUpper && isSpecial && isNumber) {
      strong = true;
    }
  }

  console.log(strong);
}

strongPassword("Abcdefgh1!");
```

### 🎯 Greatest English Letter in Uppercase & Lowercase

![Screenshot 2026-01-06 at 1.33.21 PM.png](Strings%20Questions/Screenshot_2026-01-06_at_1.33.21_PM.png)

```jsx
function GreatestLetter(str){
  let charCode = -1;

  for(let i = 0; i < str.length; i++){
    let code = str.charCodeAt(i)
    if(code >= 65 && code <= 90){
      if(code > charCode){
        charCode = code;
      }
    }
  }

  let aphabet = String.fromCharCode(charCode);

  console.log(aphabet);

}

GreatestLetter("AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyzZ");
```

###