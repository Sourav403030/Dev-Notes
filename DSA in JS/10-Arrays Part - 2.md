# Arrays Part - 2

## 👉 Questions

### 🎯 Array left rotation by 1.

<img src="./Images/left-rotation-by-1.png" width="300" />

```jsx
function leftRotation(arr){
    let temp = arr[0];
    for(let i = 1; i < arr.length; i++){
        arr[i-1] = arr[i];
    }
    arr[arr.length - 1] = temp;

    console.log(arr);
}

leftRotation([1,2,3,4,5,6]);
```

### 🎯 Array right rotation by 1.

```jsx
function rightRotation(arr){
    let temp = arr[arr.length-1];
    for(let i = arr.length - 2; i >= 0; i--){
        arr[i+1] = arr[i];
    }

    arr[0] = temp;

    console.log(arr);
}

rightRotation([1,2,3,4,5,6]);
```

### 🎯 Array left rotation by K elements.

```jsx
function leftRotationByKelements(arr, k) {
  k = k % arr.length; //(edge case)
  for (let j = 1; j <= k; j++) {
    count++;
    let temp = arr[0];
    for (let i = 1; i < arr.length; i++) {
      arr[i - 1] = arr[i];
    }
    arr[arr.length - 1] = temp;
  }
  console.log(arr);
}

leftRotationByKelements([1, 2, 3, 4, 5, 6], 3);
```

### 🎯 Array right rotation by K elements.

```jsx
function rightRotationByKelements(arr, k) {
 let k = k % arr.length //(edge case)
  for (let j = 1; j <= k; j++) {
    let temp = arr[arr.length - 1];
    for (let i = arr.length - 2; i >= 0; i--) {
      arr[i + 1] = arr[i];
    }

    arr[0] = temp;
  }

  console.log(arr);
}

rightRotationByKelements([1, 2, 3, 4, 5, 6],3);
```

### 🎯 Print the count of subarrays whose sum is equal to the target.

```jsx
function subArrays(arr,k){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        let sum = 0; // Reset sum for each starting position
        for(let j = i; j < arr.length; j++){ // Start j from i, not 0
            sum += arr[j]; // Add current element to sum
            if(sum == k) count++; // Check if current subarray sum equals k
        }
    }
    console.log(count);
}

subArrays([1,2,3,7,5], 12);

```