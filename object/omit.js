import arrayMap from '../internal/arrayMap';
import baseDifference from '../internal/baseDifference';
import baseFlatten from '../internal/baseFlatten';
import basePick from '../internal/basePick';
import keysIn from './keysIn';
import restParam from '../function/restParam';

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable properties of `object` that are not omitted.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {string|string[]} [props] The property names to omit, specified
 *  individually or in arrays..
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'user': 'fred', 'age': 40 };
 *
 * _.omit(object, 'user');
 * // => { 'age': 40 }
 */
var omit = restParam(function(object, props) {
  if (object == null) {
    return {};
  }
  props = arrayMap(baseFlatten(props), String);
  return basePick(object, baseDifference(keysIn(object), props));
});

export default omit;
