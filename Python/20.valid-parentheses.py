#
# @lc app=leetcode id=20 lang=python3
#
# [20] Valid Parentheses
#

# @lc code=start
class Solution:
    def isValid(self, s: str) -> bool:
        d = {
            '(':')',
            '[':']',
            '{':'}'
        }
        temp = []
        for char in s:
            if char in d:
                temp.append(char)
            elif len(temp) >= 1 and char == d[temp.pop()]:
                continue
            else:
                return 0
        if len(temp) == 0:
            return 1
# @lc code=end

