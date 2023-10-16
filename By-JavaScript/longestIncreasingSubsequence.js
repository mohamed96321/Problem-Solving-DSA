/**
 * @param Longest_Increasing_Subsequence
 * Explain:- {In the example above, 
 * we first create an instance of the LongestIncreasingSubsequence class. 
 * We then call the findLIS method, passing the array as an argument. 
 * The method uses a dynamic programming approach to calculate 
 * the length of the longest increasing subsequence in the array.
  After calling the findLIS method, we log the result to the console. 
  In this case, the original array [10, 9, 2, 5, 3, 7, 101, 18] 
  has a longest increasing subsequence [2, 3, 7, 101], 
  which has a length of 4. Therefore, the output is 4.
  The findLIS method uses an array dp to store the lengths of the 
  increasing subsequences ending at each index. 
  It iterates through the array, comparing each element 
  with the previous elements. If the current element is greater 
  than the previous element, it updates the length at 
  the current index in dp by taking the maximum of the current length 
  and the length at the previous index plus one.
  After calculating the lengths of all increasing subsequences, 
  the method finds the maximum length in the dp array and 
  returns it as the result, representing the length of 
  the longest increasing subsequence in the original array.
}
 */

class LongestIncreasingSubsequence {
  findLIS(nums) {
    const n = nums.length;
    const dp = Array(n).fill(1);

    for (let i = 1; i < n; i++) {
      for (let j = 0; j < i; j++) {
        if (nums[i] > nums[j]) {
          dp[i] = Math.max(dp[i], dp[j] + 1);
        }
      }
    }

    let maxLIS = 0;
    for (const length of dp) {
      maxLIS = Math.max(maxLIS, length);
    }

    return maxLIS;
  }
}

const nums = [10, 9, 2, 5, 3, 7, 101, 18];
const lisFinder = new LongestIncreasingSubsequence();
const result = lisFinder.findLIS(nums);
console.log(result); // Output: 4
