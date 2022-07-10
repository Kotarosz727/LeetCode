/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 */

// @lc code=start
function majorityElement(nums: number[]): number {
    const map = new Map<number, number>()
    let currentCount: number = 1
    let maxCountSoFar: number = 1
    let majority: number = nums[0]

    for (const num of nums){
        if(map.has(num)){
            currentCount = map.get(num) + 1
            map.set(num, currentCount)
        } else {
            map.set(num, 1)
        }

        if (currentCount > maxCountSoFar) majority = num

        maxCountSoFar = Math.max(maxCountSoFar, currentCount)
    }

    return majority
};
// @lc code=end

