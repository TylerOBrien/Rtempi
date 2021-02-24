/**
 * Local Imports
*/

import { AsyncJSON, Serializable } from '~/util/JSON';
import { Storage } from '~/util/Storage';

/**
 * Locals
*/

/**
 * Retrieve an array of all keys in storage.
 * 
 * @return {Promise<Array<string>>}
 */
function keys() : Promise<Array<string>> {
  return new Promise((resolve, reject) => {
    try {
      resolve(Object.keys(localStorage));
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Retrieve an item from storage.
 * 
 * @param {string} group
 * @param {string} key
 * 
 * @return {Promise<T>}
 */
function get<T=unknown>(group:string, key:string) : Promise<T> {
  return new Promise((resolve, reject) => {
    Storage.name(group, key)
      .then(name => AsyncJSON.parse(window.localStorage[name]))
      .then(resolve)
      .catch(reject);
  });
}

/**
 * Save an item to storage.
 * 
 * @param {string} group
 * @param {string} name
 * @param {Serializable} unserialized
 * 
 * @return {Promise<void>}
 */
function set(group:string, name:string, unserialized:Serializable) : Promise<void> {
  return new Promise((resolve, reject) => {
    Storage.entry(group, name, unserialized)
      .then(([ key, serialized ]) => {
        window.localStorage[key] = serialized;
        resolve();
      })
      .catch(reject);
  });
}

/**
 * Merge data with an existing item in storage.
 * 
 * @param {string} group
 * @param {string} name
 * @param {Serializable} unserialized
 * 
 * @return {Promise<void>}
 */
function merge<T=unknown>(group:string, name:string, unserialized:Serializable) : Promise<void> {
  return new Promise(async (resolve, reject) => {
    try {
      const stored = await get<T>(group, name);
      const merged = Object.assign(stored, unserialized);

      set(group, name, merged)
        .then(resolve)
        .catch(reject);
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Remove an item from storage.
 * 
 * @param {string} group
 * @param {string} key
 * 
 * @return {Promise<void>}
 */
function remove(group:string, key:string) : Promise<void> {
  return new Promise((resolve, reject) => {
    Storage.name(group, key)
      .then(name => {
        window.localStorage.removeItem(name);
        resolve();
      })
      .catch(reject);
  });
}

/**
 * Remove all items from storage.
 * 
 * @return {Promise<void>}
 */
function clear() : Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      window.localStorage.clear();
      resolve();
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Namespaced Exports
*/

export const StorageDriver = { keys, get, set, merge, remove, clear };
