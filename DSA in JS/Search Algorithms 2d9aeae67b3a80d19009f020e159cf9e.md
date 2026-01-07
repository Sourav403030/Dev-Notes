# Search Algorithms

Difficulty: Medium
Status: Completed
Category: Searching
Created time: December 30, 2025 11:59 AM
Last edited time: January 4, 2026 2:29 PM

## 👉 Questions

### 🎯 Linear Search

```jsx
function linearSearch(arr,num){
    let index = -1;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == num){
            index = i;
            break;
        }
    }

    console.log(index == -1 ? "Element not found" : `Element found at ${index} index`);
}

linearSearch([1,2,3,4,5,6,7,8,9], 5);
```

### 🎯 Binary Search - Only on sorted arrays.

![Screenshot 2025-12-30 at 12.02.54 PM.png](Search%20Algorithms/Screenshot_2025-12-30_at_12.02.54_PM.png)

```jsx
function binarySearch(arr, target){
    let index = -1;
    let start = 0;
    let end = arr.length - 1;

    while(start <= end){
        let mid = Math.floor((start + end) / 2);

        if(arr[mid] == target){
            index = mid;
            break;
        }

        else if(arr[mid] < target) start = mid + 1;

        else end = mid - 1;
    }

    console.log(index == -1 ? "Element not found" : `Element found at ${index} index`);
}

binarySearch([2,5,7,10,20,34,45,65,87,98], 65)
```