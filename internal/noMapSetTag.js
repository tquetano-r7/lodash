import getNative from './getNative';
import root from './root';

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for native method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/* Native method references for those with the same name as other `lodash` methods. */
var nativeMap = getNative(root, 'Map'),
    nativeSet = getNative(root, 'Set');

/** Detect lack of support for map and set `toStringTag` values (IE 11). */
var noMapSetTag = nativeMap && nativeSet &&
  !(objToString.call(new Map) == mapTag && objToString.call(new Set) == setTag);

export default noMapSetTag;
