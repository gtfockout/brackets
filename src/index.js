module.exports = function check(str, bracketsConfig) {
  let result = [];
  let leftPart = [];
  let rightPart = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    leftPart.push(bracketsConfig[i][0]);
    rightPart.push(bracketsConfig[i][1]);
  }
  for (let i = 0; i < str.length; i++) {
    let first = rightPart.indexOf(str[i]);
    let second = leftPart.indexOf(str[i]);
    if (first !== -1) {
      let top = result[result.length - 1];
      if (first === second && (top != str[i] || result.length === 0)) result.push(str[i]);
      else if (leftPart.indexOf(top) === first) result.pop();
      else return false
    } 
    else result.push(str[i]);
  }
  return result.length === 0;
}
