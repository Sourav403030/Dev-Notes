# Multi Dimensional Array Questions

## 👉 Questions

### 🎯 Diagonal Sum of a Matrix

<img src="./Images/diagonal-sum.png" width="300" />

```js
function diagonalSum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(i == j || i+j == arr[i].length-1) sum+= arr[i][j];
        }
    }

    console.log(sum);
}

diagonalSum([[1,2,3], [4,5,6], [7,8,9]]);
```

### 🎯 Transpose of a Matrix

<img src="./Images/transpose-matrix.png" width="300" />

```js
function transpose(arr){
    let row = arr.length;
    let col = arr[0].length;

    let newArr = Array.from({length: col}, ()=> Array(row).fill(0));

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            newArr[j][i] = arr[i][j];
            
        }
    }

    console.log(newArr);
}

transpose([[2,4,-1], [-10,5,11],[18,-7,6]]);
```
