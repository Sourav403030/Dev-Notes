# Strings - Part 2

Difficulty: Easy
Status: Completed
Category: Strings
Created time: January 3, 2026 7:05 PM
Last edited time: January 5, 2026 11:40 AM

## 👉 Questions

### 🎯 Toggle each alphabet of a String

- Eg - AcgDfD -> aCGdFd

```jsx
function toggle(str){
    let ch = '';
    for(let i = 0; i < str.length; i++){
        let ascii = str.charCodeAt(i);
        if(ascii >= 65 && ascii <= 90){ // Capital letters have ascii value between 65 & 90
            ch = ch + str[i].toLowerCase();
        }
        else{
            ch = ch + str[i].toUpperCase();
        }
    }
    console.log(ch);
}

toggle("AcgDfD")
```

### 🎯 Take an array of String words and a String prefix. Print the number of Strings.

- Eg - ["pay", "attention", "practise", "attend"] prefix = "at”
- Output - 2

```jsx
function prefix(arr){
    let count = 0;
    let pre = "at";
    for(let i = 0; i < arr.length; i++){
        if(arr[i].includes(pre)){
            count++;
        }
    }

    console.log(count);
}

prefix(["pay", "attention", "practise", "attend"]);
```

### 🎯 Capitalize first and last character of each word in the sentence and print the new sentence.

- Eg - hello bhai kaise ho a -> HellO BhaI KaisE HO A

```jsx
function capitalize(str){
    arrOfWords = str.split(' ');
    let ans = '';
    for(let i = 0; i < arrOfWords.length; i++){
        let word = arrOfWords[i];
        let first = word.charAt(0).toUpperCase();
        let mid = word.substring(1, word.length - 1);
        let last = word.charAt(word.length - 1).toUpperCase();

        ans = ans + (first + mid + last) + " ";
    }

    console.log(ans);
}

capitalize("hello bhai kya haal chaal");
```

### 🎯 Accept a String and print the frequency of each character present in the string.

```jsx
function frequency(str){
    let arr = new Array(128).fill(0);

    for(let i = 0; i < str.length; i++){
        let ascii = str.charCodeAt(i);
        arr[ascii] = arr[ascii] + 1;
    }

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0) console.log(String.fromCharCode(i) + "->" + arr[i]);
    }
}  

frequency("naman");

// n -> 2
// a -> 2
// m -> 1
```

### 🎯 Check two Strings are Anagram or not.

- Anagram words have the same word length and same character count.
- Eg - arc & car, night & thing, state & taste

```jsx
function isAnagram(str1, str2){
    let arr1 = new Array(128).fill(0);
    let arr2 = new Array(128).fill(0);

    let str1Length = str1.length;
    let str2Length = str2.length;

    let str1CharCount = "";
    let str2CharCount = "";

    for(let i = 0; i < str1.length; i++){
        let str1ascii = str1.charCodeAt(i);
        arr1[str1ascii] = arr1[str1ascii] + 1;
    }

    for(let i = 0; i < str2.length; i++){
        let str2ascii = str2.charCodeAt(i);
        arr2[str2ascii] = arr2[str2ascii] + 1;
    }

    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] > 0){
            str1CharCount = str1CharCount + String.fromCharCode(i) + arr1[i];
        }
    }

    for(let i = 0; i < arr2.length; i++){
        if(arr2[i] > 0){
            str2CharCount = str2CharCount + String.fromCharCode(i) + arr2[i];

        }
    }

    if(str1Length == str2Length && str1CharCount == str2CharCount){
        console.log("Anagram");
    }
    else console.log("Not Anagram");
}

isAnagram("night", "thing");
```

### 🎯 Maximum number of words found in sentences.

```jsx
function maxWords(str){
    let wordsArr = str.split(" ");
    let count = 0;

    for(let i = 0; i < wordsArr.length; i++){
        count++;
    }

    console.log(count);
}

maxWords("hello i am a good boy");
// Output - 6
```

### 🎯 Sort the words in a sentence according to its length.

```jsx
function sortWords(str){
    wordsArr = str.split(" ");

    for(let i = 0; i < wordsArr.length; i++){
        for(let j = i+1; j < wordsArr.length; j++){
            if(wordsArr[i].length > wordsArr[j].length){
                let temp = wordsArr[i];
                wordsArr[i] = wordsArr[j];
                wordsArr[j] = temp;
            }
        }
    }

    let sortedWords = wordsArr.join(" ");

    console.log(sortedWords);
}

sortWords("taj mahal is situated at agra");

// Output - is at taj agra mahal situated
```

### 🎯 Maximum number of words in an array of sentences

```jsx
function maxWords(arr){
    let maxCount = 0;
    for(let i = 0; i < arr.length; i++){
        let wordsArr = arr[i].split(' ');
        let wordCount = 0;
        for(let j = 0; j < wordsArr.length; j++){
            wordCount++;
            if(maxCount < wordCount){
                maxCount = wordCount;
            }
        }
    }

    console.log(maxCount);

    
}

maxWords(["coding is fun", "practise makes perfect", "consistency is the key to success"]);

// Output - 6
```