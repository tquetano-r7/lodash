import copyObject from '../internal/copyObject';
import createAssigner from '../internal/createAssigner';
import keysIn from './keysIn';

/**
 * This method is like `_.assign` except that it iterates over own and
 * inherited source properties.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * _.extend({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
 * // => { 'user': 'fred', 'age': 40 }
 */
var extend = createAssigner(function(object, source) {
  copyObject(source, keysIn(source), object);
});

export default extend;
