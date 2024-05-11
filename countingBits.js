/** Counting Bits
 * Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), 
 * ans[i] is the number of 1's in the binary representation of i.
*/

/**
 * SOLUTION EXPLANATION:
 * 0 - 0000 - 0
 * 1 - 0001 - 1 + memo[n - 1]
 * 2 - 0010 - 1 + memo[n - 2]
 * 3 - 0011 - 1 + memo[n - 2]
 * 4 - 0100 - 1 + memo[n - 4]
 * 5 - 0101 - 1 + memo[n - 4]
 * 6 - 0110 - 1 + memo[n - 4]
 * 7 - 0111 - 1 + memo[n - 4]
 * 8 - 1000 - 1 + memo[n - 8]
 */

const countBits = (n) => {
    const result = [0];
    let offset = 1;
    for (let i = 1; i <= n; i++) {
        if (offset * 2 == i) offset = i;
        result[i] = 1 + result[i - offset];
    }
    return result
};