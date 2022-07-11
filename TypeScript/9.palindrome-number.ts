/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
    if (x < 0) return false

    let reversed: number = 0

    for (let i = x; i >= 1; i = Math.floor(i / 10)){
        reversed = reversed * 10 + i % 10
    }

    return x === reversed
};
// @lc code=end

