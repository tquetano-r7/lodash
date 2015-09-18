import arrayExtremum from '../internal/arrayExtremum';
import identity from '../utility/identity';
import lt from '../lang/lt';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Gets the minimum value of `array`. If `array` is empty or falsey
 * `Infinity` is returned.
 *
 * @static
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the minimum value.
 * @example
 *
 * _.min([4, 2, 8, 6]);
 * // => 2
 *
 * _.min([]);
 * // => Infinity
 */
function min(array) {
  return (array && array.length)
    ? arrayExtremum(array, identity, lt, INFINITY)
    : INFINITY;
}

export default min;
