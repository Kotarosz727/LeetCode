/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
    const map = new Map([
        ['(', ')'],
        ['[', ']'],
        ['{', '}']
    ])

    const stack: string[] = []

    for (const char of s){
        if (map.has(char)) {
            stack.push(map.get(char))   
        } else if (stack.pop() === char){
            continue
        } else {
            stack.push(char)
            break
        }
    }

    return stack.length === 0
};
// @lc code=end

