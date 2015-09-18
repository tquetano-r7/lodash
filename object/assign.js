import copyObject from '../internal/copyObject';
import createAssigner from '../internal/createAssigner';
import keys from './keys';

/**
 * Assigns own enumerable properties of source objects to the destination
 * object. Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is based on
 * [`Object.assign`](http://ecma-international.org/ecma-262/6.0/#sec-object.assign).
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
 * // => { 'user': 'fred', 'age': 40 }
 */
var assign = createAssigner(function(object, source) {
  copyObject(source, keys(source), object);
});

export default assign;
