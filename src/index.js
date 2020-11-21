module.exports = function check(str, bracketsConfig) {
  const stack = [],
    pairOfBrackets = {
      '(': ')',
      '{': '}',
      '[': ']'
    },
    strToArr = str.split('');

  for (let i = 0; i < bracketsConfig.length; i++) {
    pairOfBrackets[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }
  
  for (let i = 0; i < strToArr.length; i++) {
    if (strToArr[i] === (stack[stack.length - 1])) {
      stack.pop();
    } else {
      stack.push(pairOfBrackets[strToArr[i]]);
    }
  }

  return stack.length === 0;
}
