import baseClone from '../internal/baseClone';
import baseMatchesProperty from '../internal/baseMatchesProperty';

/**
 * Creates a function that compares the value at `path` of a given object
 * to `srcValue`.
 *
 * **Note:** This method supports comparing arrays, booleans, `Date` objects,
 * numbers, `Object` objects, regexes, and strings.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @param {Array|string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * _.find(users, _.matchesProperty('user', 'fred'));
 * // => { 'user': 'fred' }
 */
function matchesProperty(path, srcValue) {
  return baseMatchesProperty(path, baseClone(srcValue, true));
}

export default matchesProperty;
