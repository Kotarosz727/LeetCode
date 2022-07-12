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
    
    const array: number[] = []
    for (const v of s){
        array.push(map.get(v))
    }

    let result: number = 0
    for (let i = 0 ; i < array.length; i++){
        if (i > 0 && array[i] > array[i-1]) {
            let tmp = array[i] - array[i-1] - array[i-1]
            result += tmp
        }
        else result += array[i]
    }

    return result
};
// @lc code=end

