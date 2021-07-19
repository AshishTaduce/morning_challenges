function isArithematic (nums) {
    const consecutives = new Array(nums.length).fill(0)
    
    for (let i = 2; i < nums.length; i++) {
      if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
        consecutives[i] = consecutives[i - 1] + 1
      }
    }
    return consecutives.reduce((a, b) => a + b);
}

let res = isArithematic([1,3,5,7,9,]);

console.log(res)