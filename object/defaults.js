import extendDefaults from '../internal/extendDefaults';
import extendWith from './extendWith';
import restParam from '../function/restParam';

/**
 * Assigns own and inherited enumerable properties of source objects to the
 * destination object for all destination properties that resolve to `undefined`.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * _.defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
 * // => { 'user': 'barney', 'age': 36 }
 */
var defaults = restParam(function(args) {
  args.push(undefined, extendDefaults);
  return extendWith.apply(undefined, args);
});

export default defaults;
