var findMaxConsecutiveOnes = function(nums) {
    let numOnes = 0;
    let maxNum = 0;

    for (let i = 0; i <nums.length; i++){
        if (nums[i]==1){
            numOnes++;
        }
        else{
            numOnes = 0;
        }
        
        if (numOnes>maxNum){
            maxNum = numOnes;
        }
    }

    return maxNum;
};