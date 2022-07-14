#
# @lc app=leetcode id=66 lang=python3
#
# [66] Plus One
#

# @lc code=start
class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        d = digits
        tmp = 0
        
        for i in range(len(d)-1, -1, -1):
            if d[i] == 9:
                tmp = 9
                d[i] = 0
        
            elif tmp == 9 and d[i] != 9:
                d[i] += 1
                return d
            
            else:
                d[i] += 1
                return d
            
        if d[0] == 0:
            d.insert(0, 1)
            return d
        
# @lc code=end

