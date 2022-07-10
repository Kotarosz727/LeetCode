/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    let min: number = prices[0]
    let maxProfit: number = 0

    for (const price of prices){
        min = Math.min(min, price)
        maxProfit = Math.max(maxProfit, price - min)
    }

    return maxProfit
};
// @lc code=end

