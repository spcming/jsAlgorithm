var verifyPostorder = function(postorder) {
    function dp(array){

        let i = array.length - 1
        let rootValue = array[i]
        if(i === 0){
            return rootValue
        }
        while(array[i]>=rootValue){
            i--
        }
        let leftArray = array.slice(0,i+1),
            rightArray = array.slice(i+1,array.length - 1),
            max
        if(rightArray.length && leftArray.length){
            max = dp(rightArray)
            let leftMax = dp(leftArray)
            if(max < rootValue || rootValue < leftMax){
                res = false
            }
        }else if(!rightArray.length || !leftArray.length){
            if(!rightArray.length){
                max = rootValue
                let leftMax = dp(leftArray)
                if(rootValue < leftMax){
                    res = false
                }
            }else{
                max = dp(rightArray)
                if(rootValue > max){
                    res = false
                }
            }
        }
        return max
    }
    let res =true,
        i = postorder.length - 1,
        rootValue = postorder[i]
    while(postorder[i]>=rootValue){
        i--
    }
    let leftArray = postorder.slice(0,i+1),
        rightArray = postorder.slice(i+1,postorder.length - 1)
    if(rightArray.length && leftArray.length){
        let leftMax = dp(leftArray),
            rightMax = dp(rightArray)
        res = res && rootValue < rightMax && rootValue > leftMax
    }else if(!rightArray.length && !leftArray.length){
        return true
    }else if(!rightArray.length || !leftArray.length){
        if(!rightArray.length){
            let leftMax = dp(leftArray)
            res = res && leftMax < rootValue
        }else{
            let rightMax = dp(rightArray)
            res = res && rightMax > rootValue
        }
    }
    return res
};