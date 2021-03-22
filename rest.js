Promise.prototype.all = function(promises){
    return new Promise((resolve,reject)=>{
        let result = []
        for(let item of promises){
            item.then(res=>{
                result.push(res)
            },rej=>{
                reject(rej)
            })
        }
        resolve(result)
    })
}

Promise.prototype.race = function(promises){
    return new Promise((resolve, reject)=>{
        for(let item of promises){
            Promise.resolve(item).then(res=>{
                resolve(res)
            },rej=>{
                reject(rej)
            })
        }
    })
}