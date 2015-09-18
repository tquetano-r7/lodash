import baseIteratee from '../internal/baseIteratee';
import baseSortedUniqBy from '../internal/baseSortedUniqBy';

/**
 * This method is like `_.uniqBy` except that it's designed and optimized
 * for sorted arrays.
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The function invoked per iteration.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.sortedUniqBy([1, 1.5, 2, 2.5], Math.floor);
 * // => [1, 2]
 */
function sortedUniqBy(array, iteratee) {
  return (array && array.length)
    ? baseSortedUniqBy(array, baseIteratee(iteratee))
    : [];
}

export default sortedUniqBy;
