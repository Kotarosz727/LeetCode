/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
    const smap = new Map([
        ['(', ')'],
        ['[', ']'],
        ['{', '}']
    ])

    const tmp: string[] = []
    const parentheses: string[] = [...s]

    for (let i: number = 0; i < parentheses.length; i++){
        const target:string = parentheses[i]

        if (smap.has(target)) {
            tmp.push(smap.get(target))   
        } else if (tmp.pop() === target){
            continue
        } else {
            tmp.push(target)
            break
        }
    }

    return tmp.length === 0
};
// @lc code=end

