import arrayExtremum from '../internal/arrayExtremum';
import gt from '../lang/gt';
import identity from '../utility/identity';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Gets the maximum value of `collection`. If `collection` is empty or falsey
 * `-Infinity` is returned.
 *
 * @static
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * _.max([4, 2, 8, 6]);
 * // => 8
 *
 * _.max([]);
 * // => -Infinity
 */
function max(array) {
  return (array && array.length)
    ? arrayExtremum(array, identity, gt, -INFINITY)
    : -INFINITY;
}

export default max;
