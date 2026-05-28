/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

//runtime = 0ms; memory= 53mb
var removeElement = function(nums, val) {
    let LI= nums.length-1;
    let i = 0;
    while (i<nums.length){
        if(nums[i] == val){
            while(nums[LI]==val){
                nums.pop();
                LI--;
            }
            nums[i] = nums[LI];
            nums.pop();
            LI--;
        }
        i++;
    }
    let k = nums.length;
    return k;
};
