import getNative from './getNative';
import root from './root';

/** Used to resolve the decompiled source of functions. */
var fnToString = Function.prototype.toString;

/* Native method references for those with the same name as other `lodash` methods. */
var nativeMap = getNative(root, 'Map');

/** Used to detect maps and sets. */
var mapCtorString = nativeMap ? fnToString.call(nativeMap) : '';

/**
 * Checks if `value` is likely a `Map` object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 */
function isMap(value) {
  var Ctor = value && value.constructor;
  return typeof Ctor == 'function' && fnToString.call(Ctor) == mapCtorString;
}

export default isMap;
