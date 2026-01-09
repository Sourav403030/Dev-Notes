// Practise File

// function array2D(arr){
//     let newArr = new Array(3);

//     for(let i = 0; i < newArr.length; i++){
//         newArr[i] = new Array(2);
//     }

//     for(let i = 0; i < newArr.length; i++){
//         for(let j = 0; j < newArr[i].length; j++){
//             newArr[i][j] = arr;
//         }
//     }

//     for(let i = 0; i < newArr.length; i++){
//         for(let j = 0; j < newArr[i].length; j++){
//             process.stdout.write(newArr[i][j] + " ");
//         }

//         console.log();
//     }
// }

// array2D([1,2]);

// function maxResult(num, char){
//     let indexToRemove = -1;
//     for(let i = 0; i < num.length; i++){
//         if(num[i] === char){
//             if(i+1 < num.length && num[i+1] > char){
//                 indexToRemove = i;
//                 break;
//             }
//             indexToRemove = i;
//         }
//     }

//     let finalResult = num.slice(0, indexToRemove) + num.slice(indexToRemove + 1);

//     console.log(finalResult);
// }

// maxResult("1231", "1");