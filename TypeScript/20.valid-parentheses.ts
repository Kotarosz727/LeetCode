/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
    if (s.length % 2 !== 0) return false

    const map = new Map<string, string>([
        ['(', ')'],
        ['[', ']'],
        ['{', '}']
    ])

    const stack: string[] = []

    for (const char of s){
        if (map.has(char)) stack.push(map.get(char))   
        else if (stack.pop() !== char) return false
    }

    return stack.length === 0
};
// @lc code=end

