import cachePush from './cachePush';
import getNative from './getNative';
import root from './root';

/* Native method references for those with the same name as other `lodash` methods. */
var nativeCreate = getNative(Object, 'create'),
    nativeSet = getNative(root, 'Set');

/**
 *
 * Creates a cache object to store unique values.
 *
 * @private
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var length = values ? values.length : 0;

  this.data = { 'hash': nativeCreate(null), 'set': new nativeSet };
  while (length--) {
    this.push(values[length]);
  }
}

// Add functions to the `Set` cache.
SetCache.prototype.push = cachePush;

export default SetCache;
