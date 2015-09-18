import SetCache from './SetCache';
import getNative from './getNative';
import root from './root';

/* Native method references for those with the same name as other `lodash` methods. */
var nativeCreate = getNative(Object, 'create'),
    nativeSet = getNative(root, 'Set');

/**
 * Creates a `Set` cache object to optimize linear searches of large arrays.
 *
 * @private
 * @param {Array} [values] The values to cache.
 * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
 */
function createCache(values) {
  return (nativeCreate && nativeSet) ? new SetCache(values) : null;
}

export default createCache;
