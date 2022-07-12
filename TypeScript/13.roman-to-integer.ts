/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
    const map = new Map<string, number>([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ])
    
    let result: number = 0
    let prev: number = 0

    for (const v of s){
        let curr = map.get(v)

        if(prev === 0) {
            prev = curr
        } else if (prev >= curr){
            result += prev
            prev = curr
        } else {
            result += curr - prev
            prev = 0
        }
    }

    return result + prev
};
// @lc code=end

