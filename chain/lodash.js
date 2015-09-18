import LazyWrapper from '../internal/LazyWrapper';
import LodashWrapper from '../internal/LodashWrapper';
import baseLodash from '../internal/baseLodash';
import isArray from '../lang/isArray';
import isObjectLike from '../lang/isObjectLike';
import wrapperClone from '../internal/wrapperClone';

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chaining. Methods that operate on and return arrays, collections, and
 * functions can be chained together. Methods that retrieve a single value or
 * may return a primitive value will automatically end the chain sequence and
 * return the unwrapped value. Otherwise, the value must be unwrapped with
 * `_#value`.
 *
 * Explicit chaining, which requires unwrapping with `_#value` in all cases,
 * may be enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, execution is deferred
 * until `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion. Shortcut
 * fusion is an optimization strategy which merge iteratee calls; this can help
 * to avoid the creation of intermediate data structures and greatly reduce the
 * number of iteratee executions.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`,
 * `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `compact`, `drop`, `dropRight`, `dropRightWhile`, `dropWhile`, `filter`,
 * `find`, `findLast`, `first`, `initial`, `last`, `map`, `reject`, `rest`,
 * `reverse`, `slice`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`,
 * and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignWith`, `at`, `before`, `bind`, `bindAll`,
 * `bindKey`, `chain`, `chunk`, `commit`, `compact`, `concat`, `constant`,
 * `countBy`, `create`, `curry`, `debounce`, `defaults`, `defaultsDeep`,
 * `defer`, `delay`, `difference`, `drop`, `dropRight`, `dropRightWhile`,
 * `dropWhile`, `extend`, `extendWith`, `fill`, `filter`, `flatten`,
 * `flattenDeep`, `flip`, `flow`, `flowRight`, `forEach`, `forEachRight`,
 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `functions`, `groupBy`,
 * `initial`, `intersection`, `invert`, `invoke`, `iteratee`, `keyBy`, `keys`,
 * `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
 * `memoize`, `merge`, `mergeWith` `method`, `methodOf`, `mixin`, `modArgs`,
 * `modArgsSet', 'negate`, `omit`, `omitBy`, `once`, `pairs`, `partial`,
 * `partialRight`, `partition`, `pick`, `pickBy`, `plant`, `property`,
 * `propertyOf`, `pull`, `pullAt`, `push`, `range`, `rearg`, `reject`,
 * `remove`, `rest`, `restParam`, `reverse`, `set`, `setWith`, `shuffle`,
 * `slice`, `sort`, `sortBy`, `sortByOrder`, `splice`, `spread`, `take`,
 * `takeRight`, `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`,
 * `times`, `toArray`, `toPath`, `toPlainObject`, `transform`, `union`,
 * `uniq`, `uniqBy`, `unset`, `unshift`, `unzip`, `unzipWith`, `values`,
 * `valuesIn`, `without`, `wrap`, `xor`, `zip`, `zipObject`, and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clone`, `cloneDeep`,
 * `cloneDeepWith`, `cloneWith`, `deburr`, `endsWith`, `eq`, `escape`,
 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
 * `findLastIndex`, `findLastKey`, `first`, `floor`, `get`, `gt`, `gte`,
 * `has`, `hasIn`, `identity`, `includes`, `indexOf`, `inRange`, `isArguments`,
 * `isArray`, `isArrayLike`, `isBoolean`, `isDate`, `isElement`, `isEmpty`,
 * `isEqual`, `isEqualWith`, `isError`, `isFinite` `isFunction`, `isInteger`,
 * `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`, `isNumber`,
 * `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`, `isSafeInteger`,
 * `isString`, `isUndefined`, `isTypedArray`, `join`, `kebabCase`, `last`,
 * `lastIndexOf`, `lt`, `lte`, `max`, `min`, `noConflict`, `noop`, `now`,
 * `pad`, `padLeft`, `padRight`, `parseInt`, `pop`, `random`, `reduce`,
 * `reduceRight`, `repeat`, `result`, `round`, `runInContext`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
 * `sortedLastIndexBy`, `startCase`, `startsWith`, `sum`, `sumBy`, `template`,
 * `toInteger`, `trim`, `trimLeft`, `trimRight`, `trunc`, `unescape`, `uniqueId`,
 * `value`, and `words`
 *
 * The wrapper method `sample` will return a wrapped value when `n` is provided,
 * otherwise an unwrapped value is returned.
 *
 * @name _
 * @constructor
 * @category Chain
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // returns an unwrapped value
 * wrapped.reduce(function(sum, n) {
 *   return sum + n;
 * });
 * // => 6
 *
 * // returns a wrapped value
 * var squares = wrapped.map(function(n) {
 *   return n * n;
 * });
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */
function lodash(value) {
  if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
    if (value instanceof LodashWrapper) {
      return value;
    }
    if (hasOwnProperty.call(value, '__wrapped__')) {
      return wrapperClone(value);
    }
  }
  return new LodashWrapper(value);
}

// Ensure wrappers are instances of `baseLodash`.
lodash.prototype = baseLodash.prototype;

export default lodash;
