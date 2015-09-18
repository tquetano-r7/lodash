/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g,
    reStrSurrogate = /[\ud800-\udfff]/;

/**
 * Gets the number of symbols in `string`.
 *
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 */
function stringSize(string) {
  if (!(string && reStrSurrogate.test(string))) {
    return string.length;
  }
  var result = reStrSymbol.lastIndex = 0;
  while (reStrSymbol.test(string)) {
    result++;
  }
  return result;
}

export default stringSize;
