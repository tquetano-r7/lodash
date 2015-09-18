import baseToString from '../internal/baseToString';
import isObject from '../lang/isObject';
import isRegExp from '../lang/isRegExp';
import stringSize from '../internal/stringSize';
import stringToArray from '../internal/stringToArray';
import toInteger from '../lang/toInteger';

/** Used as default options for `_.trunc`. */
var DEFAULT_TRUNC_LENGTH = 30,
    DEFAULT_TRUNC_OMISSION = '...';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reStrSurrogate = /[\ud800-\udfff]/;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Truncates `string` if it's longer than the given maximum string length.
 * The last characters of the truncated string are replaced with the omission
 * string which defaults to "...".
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to truncate.
 * @param {Object} [options] The options object.
 * @param {number} [options.length=30] The maximum string length.
 * @param {string} [options.omission='...'] The string to indicate text is omitted.
 * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
 * @returns {string} Returns the truncated string.
 * @example
 *
 * _.trunc('hi-diddly-ho there, neighborino');
 * // => 'hi-diddly-ho there, neighbo...'
 *
 * _.trunc('hi-diddly-ho there, neighborino', {
 *   'length': 24,
 *   'separator': ' '
 * });
 * // => 'hi-diddly-ho there,...'
 *
 * _.trunc('hi-diddly-ho there, neighborino', {
 *   'length': 24,
 *   'separator': /,? +/
 * });
 * // => 'hi-diddly-ho there...'
 *
 * _.trunc('hi-diddly-ho there, neighborino', {
 *   'omission': ' [...]'
 * });
 * // => 'hi-diddly-ho there, neig [...]'
 */
function trunc(string, options, guard) {
  var length = DEFAULT_TRUNC_LENGTH,
      omission = DEFAULT_TRUNC_OMISSION;

  if (isObject(options)) {
    var separator = 'separator' in options ? options.separator : separator;
    length = 'length' in options ? toInteger(options.length) : length;
    omission = 'omission' in options ? baseToString(options.omission) : omission;
  }
  string = baseToString(string);

  var strLength = string.length;
  if (reStrSurrogate.test(string)) {
    var strSymbols = stringToArray(string);
    strLength = strSymbols.length;
  }
  if (length >= strLength) {
    return string;
  }
  var end = length - stringSize(omission);
  if (end < 1) {
    return omission;
  }
  var result = strSymbols
    ? strSymbols.slice(0, end).join('')
    : string.slice(0, end);

  if (separator === undefined) {
    return result + omission;
  }
  if (strSymbols) {
    end += (result.length - end);
  }
  if (isRegExp(separator)) {
    if (string.slice(end).search(separator)) {
      var match,
          newEnd,
          substring = result;

      if (!separator.global) {
        separator = RegExp(separator.source, (reFlags.exec(separator) || '') + 'g');
      }
      separator.lastIndex = 0;
      while ((match = separator.exec(substring))) {
        newEnd = match.index;
      }
      result = result.slice(0, newEnd == null ? end : newEnd);
    }
  } else if (string.indexOf(separator, end) != end) {
    var index = result.lastIndexOf(separator);
    if (index > -1) {
      result = result.slice(0, index);
    }
  }
  return result + omission;
}

export default trunc;
