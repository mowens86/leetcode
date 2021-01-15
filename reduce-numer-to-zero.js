// jshint esversion:6

/**
 * @param {number} num
 * @return {number}
 */
const numberOfSteps = function(num) {
    let steps = 0;
    while (num > 0) num % 2 === 0 ? ((num = num / 2), steps++) : (--num, steps++);
    return steps;    
};

numberOfSteps(14);