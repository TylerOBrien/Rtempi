/**
 * Exports
*/

/**
 * Returns the named value from source. The given key may contain periods to
 * denote child objects/values. For example:
 * 
 * const source = {
 *     foo: 42,
 *     bar: {
 *         message: 'hello',
 *         baz: {
 *             data: 'testing 123'
 *         }
 *     }
 * };
 * 
 * pluck(source, 'foo'); // 42
 * pluck(source, 'bar.message'); // 'hello'
 * pluck(source, 'bar.baz.data'); // 'testing 123'
 * 
 * @param {InTy} source
 * @param {string} key
 * 
 * @return {OutTy}
 */
export function pluck<InTy, OutTy=unknown>(source:InTy, key:string):OutTy {
  const parts = key.split('.');
  const end = parts.length;
  
  let index = 0;
  let node = source;

  while (node && index < end) {
    node = node[parts[index++]];
  }

  return node as unknown as OutTy;
}

/**
 * 
 * 
 * @param {object} condensed
 * 
 * @return {object}
 */
export function expand(condensed:object):object {
  const expanded = {};

  for (const key in condensed) {
    const parts = key.split('.');
    const end = parts.length;
    const value = ( typeof condensed[key] === 'object' )
      ? Object.assign({}, condensed[key])
      : condensed[key];

    if (end === 1) {
      expanded[key] = value;
    } else {
      let node = expanded;

      for (let i = 0; i < (end-1); i++) {
        if (!node[parts[i]]) {
          node[parts[i]] = {};
        }
        node = node[parts[i]];
      }

      node[parts[end-1]] = value;
    }
  }

  return expanded;
}

/**
 * 
 * 
 * @param {InTy} source
 * @param {Array<string>} parent
 * @param {OutTy} existing
 * 
 * @return {OutTy}
 */
export function flatten<InTy=object, OutTy=InTy>(source:InTy, parent?:Array<string>, existing?:OutTy):OutTy {
  if (!source) {
    return null;
  }

  const tree = (parent || []) as Array<string>;
  const result = (existing || {}) as unknown as OutTy;

  for (const key in source) {
    if (typeof source[key] === 'object') {
      flatten(source[key], tree.concat(key), result);
    } else {
      result[tree.join('.') + ( tree.length ? '.' : '' ) + key] = source[key];
    }
  }

  return result;
}

/**
 * Clones the passed object and removes the specified keys.
 * 
 * @param {InTy} source
 * @param {object|Array<string>} except
 * 
 * @return {OutTy}
 */
export function except<InTy=object, OutTy=InTy>(source:InTy, except:object | Array<string>):OutTy {
  const clone = Object.assign({}, source as unknown as OutTy);

  if (Array.isArray(except)) {
    let i = (except as Array<string>).length;
    while (i--) {
      delete clone[except[i]];
    }
  } else {
    for (const key in except) {
      if (except[key]) {
        delete clone[key];
      }
    }
  }

  return clone;
}

/**
 * Namespaced Exports
*/

export const Obj = { pluck, expand, flatten, except };
