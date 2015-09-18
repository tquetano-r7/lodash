import baseRandom from '../internal/baseRandom';
import isArrayLike from '../lang/isArrayLike';
import toArray from '../lang/toArray';
import toInteger from '../lang/toInteger';
import values from '../object/values';

/* Native method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets a random element or `n` random elements from a collection.
 *
 * @static
 * @memberOf _
 * @category Collection
 * @param {Array|Object} collection The collection to sample.
 * @param {number} [n] The number of elements to sample.
 * @param- {Object} [guard] Enables use as an iteratee for functions like `_.map`.
 * @returns {*} Returns the random sample(s).
 * @example
 *
 * _.sample([1, 2, 3, 4]);
 * // => 2
 *
 * _.sample([1, 2, 3, 4], 2);
 * // => [3, 1]
 */
function sample(collection, n, guard) {
  if (guard || n == null) {
    collection = isArrayLike(collection) ? collection : values(collection);
    length = collection.length;
    return length > 0 ? collection[baseRandom(0, length - 1)] : undefined;
  }
  var index = -1,
      result = toArray(collection),
      length = result.length,
      lastIndex = length - 1;

  n = nativeMin(nativeMax(toInteger(n), 0), length);
  while (++index < n) {
    var rand = baseRandom(index, lastIndex),
        value = result[rand];

    result[rand] = result[index];
    result[index] = value;
  }
  result.length = n;
  return result;
}

export default sample;
