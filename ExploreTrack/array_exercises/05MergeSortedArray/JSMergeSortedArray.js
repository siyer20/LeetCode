/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

//runtime:0ms; runs in O(m+n)!! memory: 54mb
var merge = function(nums1, m, nums2, n) {

   let ind = m-1;
   let final = n+m- 1;

   while(nums2.length != 0){

    if(ind1<0 || nums1[ind]<=nums2.at(-1)){
        nums1[final] = nums2.pop();
    }
    else{
        nums1[final] = nums1[ind1];
        nums1[ind] = 0;
        ind1--;
    }

    final --;
   }
};

//test case
let nums1 =[-3,0,6,0,0,0];
let m = 3;
let nums2 = [1,2,3];
let n = 3;
merge(nums1, m, nums2, n);
console.log(nums1);