/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

//runtime:0ms; memory:58.68mb
var duplicateZeros = function(arr) {

    const initSize = arr.length;
    let endPointer = initSize-1;

    for (let i = 0; i < initSize; i++){
        if (arr[i] == 0){
            arr.push(0);
        }
    }

    if (initSize < arr.length){
        let zeroPointer = arr.length-1;

        while (endPointer >= 0){
            if (arr[endPointer] == 0){
                zeroPointer-=2;
                endPointer--;
            }
            else{
                let taken = arr[endPointer];
                arr[endPointer] = arr[zeroPointer];
                arr[zeroPointer] = taken;
                endPointer --;
                zeroPointer --;
            }
        }

        for (let j = 0; arr.length > initSize; j++){
            arr.pop();
        }
    }
    
};