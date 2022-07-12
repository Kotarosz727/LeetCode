/*
 * @lc app=leetcode id=168 lang=typescript
 *
 * [168] Excel Sheet Column Title
 */

// @lc code=start
function convertToTitle(n: number): string {
    const azArray: string[] = [ 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
    'Y'];

    let result: string = ''
    let remain: number = 0
    
    while (n > 0){
        remain = n % 26 
        n = Math.floor(n / 26)

        if (remain === 0) n -= 1

        result = azArray[remain] + result
    }

    return result 
};
// @lc code=end

