#include <vector>

//runtime = 0ms; memory = 14mb
class Solution {
public:
    void duplicateZeros(vector<int>& arr) {
        const int initSize = arr.size();
        int endPointer = initSize - 1;

        for (int i = 0; i< initSize; i++){
            if(arr[i] == 0){
                arr.push_back(0);
            }
        }

        if (arr.size() > initSize){
            int zeroPointer = arr.size() -1;

            while (endPointer >= 0){
                if (arr[endPointer] == 0){
                    zeroPointer -= 2;
                }
                else{
                    int taken = arr[endPointer];
                    arr[endPointer] = arr[zeroPointer];
                    arr[zeroPointer] = taken;
                    zeroPointer -= 1;
                }
                endPointer -= 1;
            }

            for (int j = 0; arr.size() > initSize; j++){ 
                arr.pop_back();
            }
        }
    }
};