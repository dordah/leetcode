/** Pascal's Triangle
 * Given an integer numRows, return the first numRows of Pascal's triangle.
*/

const generate = (numRows)=> {
    const res = [[1]];
    for (let i = 1; i < numRows; i++) {
        const lastRowPadded = [0, ...res[res.length - 1], 0];
        const lastRowLength = lastRowPadded.length;
        const temp = []
        for (let j=0; j < lastRowLength - 1; j++){
            temp.push(lastRowPadded[j] + lastRowPadded[j+1])
        }
        res.push(temp)
    }
    return res;
};

console.log(generate(5))