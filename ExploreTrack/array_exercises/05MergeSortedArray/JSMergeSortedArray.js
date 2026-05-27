/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

//runtime:2ms; memory=53.98mb -- needs improvement
var merge = function(nums1, m, nums2, n) {

   let ind1 = 0;
   let ind2 = 0;

   while (ind2 < n){
    if (m == 0){
        nums1[ind1] = nums2[ind2];
        ind1++;
        ind2++;
    }
    else{
        if(nums1[ind1] <= nums2[ind2]){
            ind1 ++;
            m --;
        }

        if (nums1[ind1] > nums2[ind2]){
            let stored = nums2[ind2];
            let counter = ind1;
            ind2 ++;
            ind1++;

            while (counter < nums1.length){
                let taken = nums1[counter];
                nums1[counter] = stored;
                stored = taken;
                counter ++;
            }
        }

    }
   }
};

let nums1 =[1,2,3,0,0,0];
let m = 3;
let nums2 = [2,5,6];
let n = 3;
merge(nums1, m, nums2, n);
console.log(nums1);