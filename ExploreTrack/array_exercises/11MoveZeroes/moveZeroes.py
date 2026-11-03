class Solution(object):
    def moveZeroes(self, nums):
        
        z=0
        for i in range(0, len(nums)):
            if nums[i]!=0:
                nums[z]=nums[i]
                z+=1
        
        
        while z < len(nums):
            nums[z]=0
            z+=1