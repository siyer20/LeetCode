/**
 * @param {number[]} nums
 * @return {number}
 */

//runtime = 0ms; memory=57.38mb
var removeDuplicates = function(nums) {
    let i = 1;
    let unique = 0;
    while(i<nums.length){
        if(nums[i] !== nums[unique]){
            unique ++;
            nums[unique]=nums[i];
        }
        i++
    }
    let k = unique+1;
    return k;
};

let nums = [1,1,2];
console.log(removeDuplicates(nums));
console.log(nums);