var isMatch = function(s, p) {
    let reg = new RegExp(p)
    let result = s.match(p)
    return result ? result[0] === s : false
};
console.log(isMatch('ab','.*c'))
