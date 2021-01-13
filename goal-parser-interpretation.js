/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    const replaceParantheses = command.split("()").join("o");
    const replaceAl = replaceParantheses.split("(al)").join("al");
    const answer = replaceAl;
    return answer;
};

interpret("G()()()()(al)");