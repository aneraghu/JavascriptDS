var threeSum = function (nums, target) {
    var map = new Map();
    var arr = []
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }
    for (let i = 0; i < nums.length; i++) {
        if (i != 0 && nums[i] == nums[i - 1]) continue;
        for (let j = i + 1; j < nums.length; j++) {
            if (j != i + 1 && nums[j] == nums[j - 1]) continue;
            let sum = nums[i] + nums[j]
            if (map.has(target - sum) && map.get(target - sum) > j) {
                arr.push([nums[i], nums[j], target - sum])
            }
        }
    }
    return arr;
};
