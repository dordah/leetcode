/** Combination Sum IV
 * Given an array of distinct integers nums and a target integer target, 
 * return the number of possible combinations that add up to target.
 * The test cases are generated so that the answer can fit in a 32-bit integer.
 * Example 1:
 * Input: nums = [1,2,3], target = 4
 * Output: 7
 * Explanation:
 * The possible combination ways are:
 * (1, 1, 1, 1)
 * (1, 1, 2)
 * (1, 2, 1)
 * (1, 3)
 * (2, 1, 1)
 * (2, 2)
 * (3, 1)
 * Note that different sequences are counted as different combinations.
 * 
 * Example 2:
 * Input: nums = [9], target = 3
 * Output: 0
*/

const combinationSum4 = (nums, target) => {
    const dp = new Map();
    dp.set(0, 1);

    for (let total = 1; total <= target; total++) {
        dp.set(total, 0);
        for (const n of nums) {
            const prevCount = dp.get(total - n) || 0;
            dp.set(total, (dp.get(total) || 0) + prevCount);
        }
    }

    return dp.get(target) || 0;
};

console.log(combinationSum4([1,2,3],4))