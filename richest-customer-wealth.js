/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    const sums = [];
    
    for (let account of accounts) {
        let total = account.reduce((acc, curr) =>  acc + curr, 0);
        sums.push(total); 
    };
    
    const highestSum = Math.max(...sums);
    return highestSum;
};

maximumWealth([[1,2,3],[3,2,1]]);