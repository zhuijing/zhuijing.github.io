// var arr = [-2,1,-3,4,-1,2,1,2,-5,4,5]
var arr = [1]
// var arr = [1,2]
// var arr = [1,2,3]


        // 0, 1, 2,3 ,4
var maxSubArray = function(nums) {
  let max = null;
  let start= 0
  let index = 0
  while(start <= nums.length) {
    index ++
    if(index > nums.length) {
        start++
        index = start + 1
    }
    const source = nums.slice(start,index)
    if(start === nums.length) return max
    const total = source.reduce((prev,curr) => {
        return prev+ curr
    })
    if(max === null){
      max = total
    }else if(total> max) {
        max = total
    }
      
  }
  return max
};



console.log(maxSubArray(arr),'===');