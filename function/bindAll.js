import arrayEach from '../internal/arrayEach';
import baseFlatten from '../internal/baseFlatten';
import createWrapper from '../internal/createWrapper';
import restParam from './restParam';

/** Used to compose bitmasks for wrapper metadata. */
var BIND_FLAG = 1;

/**
 * Binds methods of an object to the object itself, overwriting the existing
 * method.
 *
 * **Note:** This method doesn't set the "length" property of bound functions.
 *
 * @static
 * @memberOf _
 * @category Function
 * @param {Object} object The object to bind and assign the bound methods to.
 * @param {...(string|string[])} methodNames The object method names to bind,
 *  specified individually or in arrays.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var view = {
 *   'label': 'docs',
 *   'onClick': function() {
 *     console.log('clicked ' + this.label);
 *   }
 * };
 *
 * _.bindAll(view, 'onClick');
 * jQuery('#docs').on('click', view.onClick);
 * // => logs 'clicked docs' when the element is clicked
 */
var bindAll = restParam(function(object, methodNames) {
  arrayEach(baseFlatten(methodNames), function(key) {
    object[key] = createWrapper(object[key], BIND_FLAG, object);
  });
  return object;
});

export default bindAll;
