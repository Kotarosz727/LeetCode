#
# @lc app=leetcode id=121 lang=python3
#
# [121] Best Time to Buy and Sell Stock
#

# @lc code=start
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min_sofar = prices[0]
        max_profit = 0
        for i in prices:
            min_sofar = min(min_sofar, i)
            diff = i - min_sofar
            max_profit = max(diff, max_profit)
        return max_profit   
# @lc code=end

