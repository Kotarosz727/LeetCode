/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 */

// @lc code=start
function majorityElement(nums: number[]): number {
    let majority: number = nums[0]
    let count: number = 1

    for (const num of nums.slice(1)){
        if (majority === num) count += 1 
        else if (count === 0) majority = num 
        else count -= 1
    }
    
    return majority
};
// @lc code=end

