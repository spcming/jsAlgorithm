/**
 * @param {string} s
 * @return {number}
 */
 var longestValidParentheses = function(s) {
    // total_list 表示的是以索引i为结尾的最长有效括号长度
    let total_list = []
    total_list.push(0)
    let max = 0;
    for(let i = 1; i < s.length; i++){
        let testIndex = i - 1 - total_list[i - 1]
        if (testIndex >=0 && s[testIndex] === "(" && s[i] === ")") {
            total_list[i] = total_list[i - 1] + 2
        } else {
            total_list[i] = 0
        }
        let l1 = total_list[i], l2 = 0, cur_i = i
        while(l1){
            l2 += l1
            cur_i = cur_i - l1
            l1 = cur_i >= 0 ? total_list[cur_i] : 0
        }
        total_list[i] = l2
        max = Math.max(max, l2)
    }
    return max
};