var maxArea = function(height) {
    let i=0,
        j=height.length-1,
        resMax=0;
    while(i<j){
        resMax = Math.max(Math.min(height[i],height[j])*(j-i),resMax)
        if(height[i]<height[j]){
            i++;
        }else{
            j--;
        }
    }
    return resMax;
};