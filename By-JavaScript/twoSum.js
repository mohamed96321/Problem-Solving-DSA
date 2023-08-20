/**
 * @param Two_Sum
 * Time complexity: 0(n2)
 * Space complexity: O(1)
 */

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; l++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

let data = twoSum([3, 3], 6);
console.log(data);
