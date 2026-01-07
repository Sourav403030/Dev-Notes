# Sorting Algorithms

Difficulty: Medium
Status: Completed
Category: Sorting
Created time: January 1, 2026 12:46 PM
Last edited time: January 1, 2026 1:46 PM

## 👉 Questions

### 🎯 Bubble Sort

![Screenshot 2026-01-01 at 12.47.59 PM.png](Sorting%20Algorithms/Screenshot_2026-01-01_at_12.47.59_PM.png)

```jsx
function bubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {       // Phases
    for (let j = 0; j < n - 1 - i; j++) { // Steps
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  console.log(arr);
}

bubbleSort([9,8,1,4,10,23]);
```

### 🎯 Selection Sort

![Screenshot 2026-01-01 at 1.42.10 PM.png](Sorting%20Algorithms/Screenshot_2026-01-01_at_1.42.10_PM.png)

```jsx
function selectionSort(arr){
  for(let i = 0; i < arr.length - 1; i++){
    let min = i;
    for(let j = i + 1; j < arr.length; j++){
      if(arr[j] < arr[min]) min = j;
    }

    if(min != i){
      let temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }

  console.log(arr);
}

selectionSort([5,1,8,10,7,12]);
```

### 🎯 Insertion Sort

```jsx
function insertionSort(arr){
  for(let i = 1; i < arr.length; i++){
    let key = arr[i];
    let j = i-1;
    while(j >= 0 && arr[j] > key){
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = key;
  }

  console.log(arr);
}

insertionSort([5,1,8,10,7,12]);
```