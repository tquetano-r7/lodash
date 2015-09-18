import getNative from './getNative';
import root from './root';

/** Used to resolve the decompiled source of functions. */
var fnToString = Function.prototype.toString;

/* Native method references for those with the same name as other `lodash` methods. */
var nativeSet = getNative(root, 'Set');

/** Used to detect maps and sets. */
var setCtorString = nativeSet ? fnToString.call(nativeSet) : '';

/**
 * Checks if `value` is likely a `Set` object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 */
function isSet(value) {
  var Ctor = value && value.constructor;
  return typeof Ctor == 'function' && fnToString.call(Ctor) == setCtorString;
}

export default isSet;
