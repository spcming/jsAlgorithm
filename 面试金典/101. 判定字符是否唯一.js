/**
 * @param {string} astr
 * @return {boolean}
 */
 var isUnique = function(astr) {
    return astr.split('').find((value,index)=>
        astr.split('').slice(index+1).find((v)=>v===value)!==undefined
    ) === undefined
};
// console.log(isUnique("abc"))
const promise = new Promise((resolve) => {
    setTimeout(() => {
        console.log('233')
        resolve
    }, 1000);
})

console.log('2')
console.log(promise)