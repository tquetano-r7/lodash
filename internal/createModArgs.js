import arrayEvery from './arrayEvery';
import baseFlatten from './baseFlatten';
import baseIsFunction from './baseIsFunction';
import copyArray from './copyArray';
import restParam from '../function/restParam';

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Native method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Creates a function like `_.modArgs`.
 *
 * @private
 * @param {Function} resolver The function to resolve which invocation
 *  arguments are provided to each transform.
 * @returns {Function} Returns the new arguments modifier function.
 */
function createModArgs(resolver) {
  return restParam(function(func, transforms) {
    transforms = baseFlatten(transforms);
    if (typeof func != 'function' || !arrayEvery(transforms, baseIsFunction)) {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var funcsLength = transforms.length;
    return restParam(function(args) {
      var index = -1,
          length = nativeMin(args.length, funcsLength),
          modded = copyArray(args);

      while (++index < length) {
        modded[index] = transforms[index].apply(this, resolver(args[index], index, args));
      }
      return func.apply(this, modded);
    });
  });
}

export default createModArgs;
