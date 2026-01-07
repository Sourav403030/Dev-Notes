# Arrays Part - 1

## 👉 Questions

### 🎯 Explain the output of the code.

```jsx
let arr = new Array(3);
arr.push(1000);
arr.unshift(100);
console.log(arr);

//Output - [ 100, <3 empty items>, 1000 ]
```

- `push()` and `unshift()` do not add elements within the given length because, in JavaScript, the length of an array is **not a fixed capacity**.
- new Array(n) only sets the **initial length**, not the maximum size.
- JavaScript arrays are **dynamic**, so push() always adds an element at the end and increases the length, while unshift() adds an element at the beginning and shifts existing elements, increasing the length as well.

### 🎯 Largest element of an Array.

```jsx
function maxElementOfAnArray(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max) max = arr[i];
    }

    console.log(max);
}

maxElementOfAnArray([20,64,37,28,90,16]);
```

### 🎯 Second largest element of an Array.

```jsx
function secondLargestElem(arr){
    let max = arr[0] > arr[1] ? arr[0] : arr[1];
    let secondMax = arr[0] < arr[1] ? arr[0] : arr[1];

    for(let i = 2; i < arr.length; i++){
        if(arr[i] > max){
            secondMax = max;
            max = arr[i];
        }
        else if(arr[i] > secondMax && arr[i] != max){
            secondMax = arr[i];
        }
    }

    console.log(secondMax);
}

secondLargestElem([17,38,40,28,70,54,78,29]);
```

### 🎯 Reverse an Array - With extra space.

```jsx
function reverseArray(arr){
    let newArr = [];
    for(let i = arr.length - 1; i >= 0; i--){
        newArr.push(arr[i]);
    }

    console.log(newArr);
}

reverseArray([1,2,3,4,5,6]);
```

### 🎯 Reverse an Array - Without extra space.

```jsx
function reverseArray(arr){
    let i = 0;
    let j = arr.length - 1;

    while(i < j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    console.log(arr);

}

reverseArray([78,34,25,90,87,13,54]);
```

### 🎯 Shift all Zeros to left and Ones to right.

```jsx
function shiftOnesZeros(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] == 0){
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    console.log(arr);
}

moveZeroOnes([1,0,0,1,1,0,0,1,1,1,0,0,1,1,0]);
```

### 🎯 Calculate Sum and Mean of an Array.

```jsx
function sumAndMean(arr){
    let sum = 0;
    let mean = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    mean = sum / arr.length;

    console.log(sum, mean);
}

sumAndMean([1,2,3,4,5]);
```