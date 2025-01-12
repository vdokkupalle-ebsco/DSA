/**
 * Given an integer array nums, move all the 0's to the end of the array.
 * The relative order of the other elements must remain the same.
 * This must be done in place, without making a copy of the array.
 *
 *
 *  Example 1
 *   Input: nums = [0, 1, 4, 0, 5, 2]
 *   Output: [1, 4, 5, 2, 0, 0]
 *   Explanation: Both the zeroes are moved to the end and the order of the other elements stay the same
 *
 *  Example 2
 *   Input: nums = [0, 0, 0, 1, 3, -2]
 *   Output: [1, 3, -2, 0, 0, 0]
 *   Explanation: All 3 zeroes are moved to the end and the order of the other elements stay the same
 */

function moveZerosToEnd(nums) {
  let i = 0;
  let j = 0;
  while (j < nums.length) {
    if (nums[j] !== 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
    }
    j++;
  }
  return nums;
}

//Dry run
// moveZerosToEnd([0, 1, 4, 0, 5, 2])
// i = 0, j = 0
// nums[i] = 0, nums[j] = 0
// j++
// i = 0, j = 1
// nums[i] = 0, nums[j] = 1
// swap nums[i] and nums[j]
// nums = [1, 0, 4, 0, 5, 2]
// i++
// j++
// i = 1, j = 2
// nums[i] = 0, nums[j] = 4
// swap nums[i] and nums[j]
// nums = [1, 4, 0, 0, 5, 2]
// i++
// j++
// i = 2, j = 3
// nums[i] = 0, nums[j] = 0
// j++
// i = 2, j = 4
// nums[i] = 0, nums[j] = 5
// swap nums[i] and nums[j]
// nums = [1, 4, 5, 0, 0, 2]
// i++
// j++
// i = 3, j = 5
// nums[i] = 0, nums[j] = 2
// swap nums[i] and nums[j]
// nums = [1, 4, 5, 2, 0, 0]
// j++
// j = 6
// j >= nums.length
// return nums

// Test cases
console.log(moveZerosToEnd([0, 1, 4, 0, 5, 2])); // [1, 4, 5, 2, 0, 0]
console.log(moveZerosToEnd([0, 0, 0, 1, 3, -2])); // [1, 3, -2, 0, 0, 0]
console.log(moveZerosToEnd([0, 0, 0, 0, 0, 0])); // [0, 0, 0, 0, 0, 0]
