import baseToString from '../internal/baseToString';

/** Used to match words to create compound words. */
var reWords = (function() {
  var astrals = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      upper = '[A-Z\\xc0-\\xd6\\xd8-\\xde]',
      lower = '[a-z\\xdf-\\xf6\\xf8-\\xff]+',
      digits = '\\d+';

  return RegExp([upper + '+(?=' + upper + lower + ')', upper + '?' + lower, upper + '+', astrals, digits].join('|'), 'g');
}());

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for functions like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = baseToString(string);
  pattern = guard ? undefined : guard;
  return string.match(pattern || reWords) || [];
}

export default words;
