#
# @lc app=leetcode id=13 lang=python3
#
# [13] Roman to Integer
#

# @lc code=start
class Solution:
    def romanToInt(self, s: str) -> int:
        d = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000}
        l = []
        before = 0
        
        for key in s:
            val = d[key]
            
            if before > 0 and val > before:
                l.pop()
                val = (val - before) 
            
            l.append(val)
            before = d[key]
        
        return sum(l)
        
# @lc code=end

