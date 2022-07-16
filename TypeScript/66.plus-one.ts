/*
 * @lc app=leetcode id=66 lang=typescript
 *
 * [66] Plus One
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
    return String(BigInt(digits.join('')) + 1n).split('').map(val => +val)
};
// @lc code=end

