/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  // ваш код...
  if (str.includes('1XbeT now') || str.includes('free xxxxx')) {
    return true;
  }
  else {
    return false;
  };
}
