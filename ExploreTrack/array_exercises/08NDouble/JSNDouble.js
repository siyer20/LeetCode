/**
 * @param {number[]} arr
 * @return {boolean}
 */
//runtime = 0ms; memory = 54.48mb
var checkIfExist = function(arr) {

    for(let i = 0; i < arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(i!==j && arr[i]%2===0){
                if (arr[i]==2*arr[j]){
                    return true;
                }
            }
        }
    }
    return false;
};