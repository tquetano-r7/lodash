/**
 * The base implementation of `_.sum` without support for callback shorthands.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {number} Returns the sum.
 */
function baseSum(array, iteratee) {
  var index = -1,
      length = array.length,
      result = 0;

  while (++index < length) {
    result += +iteratee(array[index]) || 0;
  }
  return result;
}

export default baseSum;
