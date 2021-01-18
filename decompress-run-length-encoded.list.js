/**
 * @param {number[]} nums
 * @return {number[]}
 */
const decompressRLElist = (nums) => {
    const utils = {
       counter: 0,
       arrayGenerator: (freq, val) => {
          return Array(freq).fill(val);
       } 
    }
    
    let tempArr = [];
    const newArr = [];
    const answer = [];
    
    // Loop through nums
    for (let num of nums) {
        if (utils.counter < 2) {
            tempArr.push(num);
            utils.counter++;
        } 
        
        if (utils.counter == 2) {
            newArr.push(tempArr);
            utils.counter = 0;
            tempArr = [];
        }
    }
    
    // Loop through newArr
    for (let arr in newArr) {
        answer.push(utils.arrayGenerator(newArr[arr][0], newArr[arr][1]))
    }
    
    return answer.flat();
};

decompressRLElist([1,2,3,4]);