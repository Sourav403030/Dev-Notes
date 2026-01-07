# Array Questions

Difficulty: Medium
Status: Completed
Category: Array
Created time: December 27, 2025 12:10 PM
Last edited time: December 30, 2025 12:00 PM

## 👉 Questions

### 🎯 Sum of Absolute Differences.

![Screenshot 2025-12-27 at 12.11.59 PM.png](Array%20Questions/Screenshot_2025-12-27_at_12.11.59_PM.png)

![Screenshot 2025-12-27 at 12.14.44 PM.png](Array%20Questions/Screenshot_2025-12-27_at_12.14.44_PM.png)

```jsx
function absoluteDifference(arr){
    let sumOfDiff = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = i; j < arr.length; j++){
            let diff = Math.abs(arr[i] - arr[j]);
            sumOfDiff += diff;
        }
    }

    console.log(sumOfDiff);
}

absoluteDifference([-1,3,-2,5]);
```

### 🎯 Multiplication of Previous and Next.

![Screenshot 2025-12-27 at 12.16.20 PM.png](Array%20Questions/Screenshot_2025-12-27_at_12.16.20_PM.png)

```jsx
function PreviousNextMultiplication(arr){
    let newArr = [];

    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            newArr.push(arr[i] * arr[j]);
        }
    }

    console.log(newArr);

}

PreviousNextMultiplication([1,2,3,4,5]);
```

### 🎯 Minimum value to add for Balanced Array.

![Screenshot 2025-12-27 at 12.17.46 PM.png](Array%20Questions/Screenshot_2025-12-27_at_12.17.46_PM.png)

```jsx
function BalancedArray(arr){
    let addedValue = 0;
    let leftSum = 0;
    let rightSum = 0;

    for(let i = 0; i < arr.length/2; i++){
        leftSum += arr[i];
    }

    for(let j = arr.length/2; j < arr.length; j++){
            rightSum += arr[j];
        }

    addedValue += Math.abs(leftSum - rightSum);

    console.log(addedValue);
}

BalancedArray([1,2,1,2,1,3]);
```

### 🎯 Sort First half Ascending and Second half Descending.

![Screenshot 2025-12-27 at 12.18.48 PM.png](Array%20Questions/Screenshot_2025-12-27_at_12.18.48_PM.png)

```jsx
function sortArray(arr){
    for(let i = 0; i < Math.floor(arr.length/2); i++){
        for(let j = i+1; j < Math.floor(arr.length/2); j++){
            if(arr[i] > arr[j]){
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }

    for(let i = Math.floor(arr.length/2); i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] < arr[j]){
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }

    console.log(arr);
}

sortArray([2,6,3,1,9,8,5]);
```