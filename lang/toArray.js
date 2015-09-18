import copyArray from '../internal/copyArray';
import isArrayLike from './isArrayLike';
import isMap from '../internal/isMap';
import isSet from '../internal/isSet';
import isString from './isString';
import iteratorToArray from '../internal/iteratorToArray';
import mapToArray from '../internal/mapToArray';
import noMapSetTag from '../internal/noMapSetTag';
import root from '../internal/root';
import setToArray from '../internal/setToArray';
import stringToArray from '../internal/stringToArray';
import values from '../object/values';

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    setTag = '[object Set]';

/** Used for native method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/** Native value references. */
var Symbol = root.Symbol,
    iteratorSymbol = typeof (iteratorSymbol = Symbol && Symbol.iterator) == 'symbol' ? iteratorSymbol : undefined;

/**
 * Converts `value` to an array.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Array} Returns the converted array.
 * @example
 *
 * (function() {
 *   return _.toArray(arguments).slice(1);
 * }(1, 2, 3));
 * // => [2, 3]
 */
function toArray(value) {
  if (!value) {
    return [];
  }
  if (isArrayLike(value)) {
    return isString(value) ? stringToArray(value) : copyArray(value);
  }
  if (iteratorSymbol && value[iteratorSymbol]) {
    return iteratorToArray(value[iteratorSymbol]());
  }
  var tag = objToString.call(value);
  if (noMapSetTag && tag == objectTag) {
    tag = isMap(value) ? mapTag : (isSet(value) ? setTag : tag);
  }
  var func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);
  return func(value);
}

export default toArray;
