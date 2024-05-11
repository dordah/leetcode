/** Climbing Stairs
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/
const climbStairs = (n) => {
    const memo = new Map([
        [1, 1],
        [2, 2]
    ]);
    return climbStairsMemoized(n, memo);
};

const climbStairsMemoized = (n, memo) => {
    if (memo.has(n)) return memo.get(n);
    else {
        const res = climbStairsMemoized(n - 1, memo) + climbStairsMemoized(n - 2, memo);
        memo.set(n, res);
        return res;
    }
};

console.log(climbStairs(5))