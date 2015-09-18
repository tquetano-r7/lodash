import baseClone from '../internal/baseClone';

/**
 * This method is like `_.clone` except that it accepts `customizer` which
 * is invoked to produce the cloned value. If `customizer` returns `undefined`
 * cloning is handled by the method instead. The `customizer` is invoked with
 * up to five arguments; (value [, index|key, object, stackA, stackB]).
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to clone.
 * @param {Function} [customizer] The function to customize cloning.
 * @returns {*} Returns the cloned value.
 * @example
 *
 * var el = _.clone(document.body, function(value) {
 *   if (_.isElement(value)) {
 *     return value.cloneNode(false);
 *   }
 * });
 *
 * console.log(el === document.body);
 * // => false
 * console.log(el.nodeName);
 * // => BODY
 * console.log(el.childNodes.length);
 * // => 0
 */
function cloneWith(value, customizer) {
  return baseClone(value, false, customizer);
}

export default cloneWith;
