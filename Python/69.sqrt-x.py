#
# @lc app=leetcode id=69 lang=python3
#
# [69] Sqrt(x)
#

# @lc code=start
class Solution:
    def mySqrt(self, x: int) -> int:
        l, r = 0, x
        
        while l <= r:
            mid = (l + r) // 2
            
            if mid * mid > x:
                r = mid -1
            elif mid * mid < x:
                l = mid +1
            else:
                return mid
        
        return r
    
# @lc code=end

