/*
 * @lc app=leetcode id=66 lang=typescript
 *
 * [66] Plus One
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
    
    for (let i = digits.length-1 ; i >= 0 ; i -= 1 ){
        if (digits[i] === 9){
            digits[i] = 0
        } else {
            digits[i] += 1
            return digits
        }
    }

    if (digits[0] === 0) {
        digits.unshift(1)
        return digits
    }

    return digits
};
// @lc code=end

