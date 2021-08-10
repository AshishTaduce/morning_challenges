function isBalanced (strOfBracks) {
    let checkSign = {
        '{': "}",
        "[": "]",
        "(": ")",
    };
    let record = [];
    for (let sign of strOfBracks) {
        if (sign === '[' ||sign === '(' ||sign === '{'){
            record.push(sign);
        }
        else {
            if (checkSign[record[record.length - 1]]!== sign) {
                return sign;
            }
            record.pop();
        }
    }
    return true;
}
console.log(isBalanced('[[]]()') )// true
console.log(isBalanced('[[]]())')) // false
console.log(isBalanced('[{[]]())') )// false
isBalanced('(){}') // true
