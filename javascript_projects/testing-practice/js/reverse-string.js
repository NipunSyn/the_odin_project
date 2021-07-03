function reverseString(str) {
  let array = Array.from(str);
  let newStr = "";
  while (array.length > 0) {
    newStr += array.pop();
  }
  return newStr;
}
module.exports = reverseString