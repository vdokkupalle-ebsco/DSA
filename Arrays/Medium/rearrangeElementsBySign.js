/**
 * Given an integer array nums of even length consisting of an equal number of positive and negative integers.Return the answer array in such a way that the given conditions are met:
 * Every consecutive pair of integers have opposite signs.
 * For all integers with the same sign, the order in which they were present in nums is preserved.
 * The rearranged array begins with a positive integer.
 *
 *
 * Example 1
 * Input: nums = [1, 2, 3, -4, -1, -2]
 * Output: [1, -4, 2, -1, 3, -2]
 *
 * Example 2
 * Input: nums = [-1, 2, -3, 4, -5, 6]
 * Output: [2, -1, 4, -3, 6, -5]
 */

function rearrangeElmentsBySign(nums) {
  let positiveIndex = 0;
  let negativeIndex = 1;
  let out = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      out[positiveIndex] = nums[i];
      positiveIndex += 2;
    } else {
      out[negativeIndex] = nums[i];
      negativeIndex += 2;
    }
  }
  return out;
}

function rearrangeElmentsBySignInPlace(nums) {
  let i = 0;
  let j = 1;
  while (j < nums.length) {
    if ((nums[i] >= 0 && nums[j] < 0) || (nums[i] < 0 && nums[j] >= 0)) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i += 2;
    }
    j += 2;
  }
  return nums;
}

//Test cases:
console.log(rearrangeElmentsBySign([1, 2, 3, -4, -1, -2])); //Output: [1, -4, 2, -1, 3, -2]
console.log(rearrangeElmentsBySign([-1, 2, -3, 4, -5, 6])); //Output: [2, -1, 4, -3, 6, -5]
