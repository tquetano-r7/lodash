import baseToString from '../internal/baseToString';
import stringToArray from '../internal/stringToArray';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reStrSurrogate = /[\ud800-\udfff]/;

/**
 * Capitalizes the first character of `string`.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('fred');
 * // => 'Fred'
 */
function capitalize(string) {
  string = baseToString(string);
  if (!string) {
    return string;
  }
  if (reStrSurrogate.test(string)) {
    var strSymbols = stringToArray(string);
    return strSymbols[0].toUpperCase() + strSymbols.slice(1).join('');
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default capitalize;
