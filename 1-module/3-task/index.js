/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  // ваш код...
  if (str.length > 1){
    str = str[0].toUpperCase() + str.substring(1);
  return str;
}
  else if (~str.indexOf (' ')){
    return str;
  }
  else {
    return str.toUpperCase();
  }
}
