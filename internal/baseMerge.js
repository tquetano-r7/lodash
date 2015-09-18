import arrayEach from './arrayEach';
import assignMergeValue from './assignMergeValue';
import baseMergeDeep from './baseMergeDeep';
import isArray from '../lang/isArray';
import isObject from '../lang/isObject';
import isTypedArray from '../lang/isTypedArray';
import keysIn from '../object/keysIn';

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Array} [stackA=[]] Tracks traversed source objects.
 * @param {Array} [stackB=[]] Associates values with source counterparts.
 */
function baseMerge(object, source, customizer, stackA, stackB) {
  if (object === source) {
    return;
  }
  var props = (isArray(source) || isTypedArray(source)) ? undefined : keysIn(source);
  arrayEach(props || source, function(srcValue, key) {
    if (props) {
      key = srcValue;
      srcValue = source[key];
    }
    if (isObject(srcValue)) {
      stackA || (stackA = []);
      stackB || (stackB = []);
      baseMergeDeep(object, source, key, baseMerge, customizer, stackA, stackB);
    }
    else {
      var newValue = customizer ? customizer(object[key], srcValue, (key + ''), object, source, stackA, stackB) : undefined;
      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  });
}

export default baseMerge;
