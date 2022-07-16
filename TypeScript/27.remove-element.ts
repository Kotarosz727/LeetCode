/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
    let index: number = 0
    for (let i = 0; i < nums.length; i++){
        if (nums[i] !== val){
            nums[index] = nums[i]
            index += 1
        }
    }
    return index
};
// @lc code=end

