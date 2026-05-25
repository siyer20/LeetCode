#include <vector>

class Solution {
public:
    int findMaxConsecutiveOnes(vector<int>& nums) {
        int max = 0;
        int length = 0;
        
        for(int i = 0; i < nums.size(); i++) {
            
            if(nums[i] == 1){
                length++;
            } 
            else {
                if( length > max){ 
                    max = length; 
                }
                length = 0;
            }
        }
        
        if(length > max){
            max = length;
        }
        
        return max;
    }
};