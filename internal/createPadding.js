import repeat from '../string/repeat';
import stringSize from './stringSize';
import stringToArray from './stringToArray';
import toInteger from '../lang/toInteger';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reStrSurrogate = /[\ud800-\udfff]/;

/* Native method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil;

/**
 * Creates the padding required for `string` based on the given `length`.
 * The `chars` string is truncated if the number of characters exceeds `length`.
 *
 * @private
 * @param {string} string The string to create padding for.
 * @param {number} [length=0] The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padding for `string`.
 */
function createPadding(string, length, chars) {
  length = toInteger(length);

  var strLength = stringSize(string);
  if (!length || strLength >= length) {
    return '';
  }
  var padLength = length - strLength;
  chars = chars === undefined ? ' ' : (chars + '');

  var result = repeat(chars, nativeCeil(padLength / stringSize(chars)));
  return reStrSurrogate.test(chars)
    ? stringToArray(result).slice(0, padLength).join('')
    : result.slice(0, padLength);
}

export default createPadding;
