/**
 * @param {number[]} arr
 * @return {boolean}
 */

//runtime=32ms; memory:57.04mb
var validMountainArray = function(arr) {
    if(arr.length <3){
        return false;
    }
    
    let i = 1;
    let n=arr.length;

    while(i < n-1 && arr[i]>arr[i-1]){
        i++;
    }
    while(i>1 && i < n && arr[i]<arr[i-1]){
        i++;
    }
    
    if (i==arr.length){
        return true;
    }
    return false;
};