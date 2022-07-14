#
# @lc app=leetcode id=1 lang=python3
#
# [1] Two Sum
#

# @lc code=start
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        tmp = {}
        for i in range(len(nums)):
            key = target - nums[i]
            if key not in tmp:
                tmp[nums[i]] = i
            else:
                return [tmp[key], i]
# @lc code=end

