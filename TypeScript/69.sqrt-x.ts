/*
 * @lc app=leetcode id=69 lang=typescript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
function mySqrt(x: number): number {
    if (x === 1) return x

    let l: number = 0
    let r: number = x
    let mid: number = 0

    while (l <= r) {
        mid = Math.floor((l + r) / 2)

        if (mid * mid > x) {
            r = mid - 1
        } 
        else if (mid * mid < x){
            l = mid + 1
        } else {
            return mid
        }
    }

    return r
};
// @lc code=end

