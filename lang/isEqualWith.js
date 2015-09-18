import baseIsEqual from '../internal/baseIsEqual';

/**
 * This method is like `_.isEqual` except that it accepts `customizer` which is
 * invoked to compare values. If `customizer` returns `undefined` comparisons are
 * handled by the method instead. The `customizer` is invoked with up to seven arguments:
 * (objValue, othValue [, index|key, object, other, stackA, stackB]).
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var array = ['hello', 'goodbye'];
 * var other = ['hi', 'goodbye'];
 *
 * _.isEqualWith(array, other, function(value, other) {
 *   var reHello = /^h(?:i|ello)$/;
 *   if (reHello.test(value) && reHello.test(other)) {
 *     return true;
 *   }
 * });
 * // => true
 */
function isEqualWith(value, other, customizer) {
  customizer = typeof customizer == 'function' ? customizer : undefined;
  var result = customizer ? customizer(value, other) : undefined;
  return result === undefined ? baseIsEqual(value, other, customizer) : !!result;
}

export default isEqualWith;
