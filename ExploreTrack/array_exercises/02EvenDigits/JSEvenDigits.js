/**
 * @param {number[]} nums
 * @return {number}
 */

//runtime: 1ms; memory: 55.34 mb

var findNumbers = function(nums) {
    let amt = 0;

    for(let i = 0; i < nums.length; i++) {
        let digits = 0;
        let num = nums[i];
        while (num >= 1){
            num = num/10;
            digits ++;
        }
        if (digits % 2 == 0){
            amt++;
        }
    }

    return amt;
};

let nums = [12,345,2,6,7896];

console.log(findNumbers(nums));