/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
    let str = s.toLowerCase().replace(/[^a-z0-9]/gi, '')

    for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
      if (str.charAt(i) !== str.charAt(j)) return false;
    }
    return true;
};
// @lc code=end

