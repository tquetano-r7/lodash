import copyObjectWith from '../internal/copyObjectWith';
import createAssigner from '../internal/createAssigner';
import keysIn from './keysIn';

/**
 * This method is like `_.assignWith` except that it iterates over own and
 * inherited source properties.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var defaults = _.partialRight(_.extendWith, function(value, other) {
 *   return _.isUndefined(value) ? other : value;
 * });
 *
 * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
 * // => { 'user': 'barney', 'age': 36 }
 */
var extendWith = createAssigner(function(object, source, customizer) {
  copyObjectWith(source, keysIn(source), object, customizer);
});

export default extendWith;
