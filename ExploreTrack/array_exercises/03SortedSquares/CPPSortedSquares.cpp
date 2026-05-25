
//This is the 0(n) approach. runtime = 0ms; memory = 30.4mb

class Solution {
public:
    vector<int> sortedSquares(vector<int>& nums) {
        vector<int> sq(nums.size());
        
        int si = 0;
        int ei = nums.size()-1;
        int c = 1;
        
        while(c <=nums.size()){
            int s = nums[si]*nums[si];
            int e = nums[ei]*nums[ei];
            
            if (e>s){
                sq[sq.size()-c]=e;
                ei--;
                c++;
            }
            if(e<s){
                sq[sq.size()-c]=s;
                si++;
                c++;
            }
            if(e==s){
                if(ei!=si){
                    sq[sq.size()-c]=e;
                    sq[sq.size()-(c+1)]=s;
                    c+=2;
                    si++;
                    ei--;
                }
                else{
                    sq[sq.size()-c]=e;
                    c++;
                }
            }
        }
        return sq;
        
    }
};