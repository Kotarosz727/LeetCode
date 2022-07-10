#
# @lc app=leetcode id=169 lang=python3
#
# [169] Majority Element
#

# @lc code=start
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        tmp = nums[0]
        count = 1
        
        for i in range(1, len(nums)):
            if not count:
                tmp = nums[i]
            if nums[i] == tmp:
                count += 1
            else:
                count -= 1
        
        return tmp
# @lc code=end

