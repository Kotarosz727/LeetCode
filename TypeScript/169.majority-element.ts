/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 */

// @lc code=start
function majorityElement(nums: number[]): number {
    return nums.sort()[Math.floor(nums.length / 2)];
}
// @lc code=end

