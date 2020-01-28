var maxSubArray = function (nums) {
    var resSum = nums[0];
    var currSum = 0;
    for (let i = 0; i < nums.length; i++) {
        currSum = currSum + nums[i];
        currSum = Math.max(nums[i], currSum)
        if (resSum < currSum)
            resSum = currSum
    }
    return resSum

};
