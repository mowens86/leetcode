// jshint esversion:6

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = function(s, indices) {
    const splitAnswer = [...indices];
    const splitS = s.split("");
    splitS.forEach((letter, num) => splitAnswer.splice(indices[num], 1, letter));
    return splitAnswer.join("");
};

restoreString("codeleet", [4,5,6,7,0,2,1,3]);