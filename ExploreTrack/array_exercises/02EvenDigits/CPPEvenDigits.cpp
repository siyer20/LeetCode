class Solution {
public:
    int findNumbers(vector<int>& nums) {
        int amt = 0;
        int num = 0;
        
        for(int i = 0; i < nums.size(); i++){
            int digits = 0;
            num = nums[i];
            while(num > 0){
                num = num/10;
                digits ++;
            }
            if(digits%2==0){
                amt++;
            }
        }
        return amt;
    }
};