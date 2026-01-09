# Multi-Dimensional Array

## 👉 2-D Array

<img src="./Images/2d-array.png" width={500} />

## 👉 3-D Array

<img src="./Images/3d-array.png" width={500} />

### 🎯 Add elements to 2D Array

```js
function array2D(arr){
    let newArr = new Array(3);

    for(let i = 0; i < newArr.length; i++){
        newArr[i] = new Array(2);
    }

    for(let i = 0; i < newArr.length; i++){
        for(let j = 0; j < newArr[i].length; j++){
            newArr[i][j] = arr;
        }
    }

    for(let i = 0; i < newArr.length; i++){
        for(let j = 0; j < newArr[i].length; j++){
            process.stdout.write(newArr[i][j] + " ");
        }

        console.log();
    }
}

array2D([1,2]);
```

