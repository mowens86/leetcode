// jshint esversion:6

/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = function(n) {
    const stringed = n.toString()
    const newArr = stringed.split('');
    const intArr = newArr.map(num => parseInt(num));
    const product = intArr.reduce((acc, curr) => acc * curr);
    const sum = intArr.reduce((acc, curr) => acc + curr);
    return product - sum;
};

subtractProductAndSum(4421);