import baseFlatten from '../internal/baseFlatten';
import basePick from '../internal/basePick';
import restParam from '../function/restParam';

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {string|string[]} [props] The property names to pick, specified
 *  individually or in arrays.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'user': 'fred', 'age': 40 };
 *
 * _.pick(object, 'user');
 * // => { 'user': 'fred' }
 */
var pick = restParam(function(object, props) {
  return object == null ? {} : basePick(object, baseFlatten(props));
});

export default pick;
