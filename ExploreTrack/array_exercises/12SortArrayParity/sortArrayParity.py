class Solution(object):
    def sortArrayByParity(self, nums):
        lp = 0
        rp = len(nums) -1
        
        while rp > lp:
            while nums[lp]%2==0 and lp<rp:
                lp+=1
            while nums[rp]%2!=0 and lp<rp:
                rp-=1
            nums[rp], nums[lp] = nums[lp], nums[rp]
            lp+=1
            rp-=1
        return nums