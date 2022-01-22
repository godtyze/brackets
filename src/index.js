module.exports = function check(str, bracketsConfig) {
    const config = new Map(bracketsConfig);
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === config.get(stack[stack.length - 1])) {
            stack.pop();
        } else {
            stack.push(str[i]);
        }
    }

    return stack.length === 0;
}
