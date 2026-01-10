// Practise File

function indexChecker(str){
    let freq = new Array(10).fill(0);

    for(let ch of str){
        freq[ch]++;
    }

    for(let i = 0; i < str.length; i++){
        if(freq[i] != Number(str[i])) return false;
    }
    
    return true;
}

console.log(indexChecker("1210"));