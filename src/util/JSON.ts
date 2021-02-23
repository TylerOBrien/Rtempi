/**
 * Types/Interfaces
*/

export type Serializable<T=object> = boolean | string | number | Array<Serializable> | T;

/**
 * Locals
*/

/**
 * Wraps built-in JSON.parse() function with a Promise.
 * 
 * @param {string} serialized
 * 
 * @return {Promise<T>}
 */
function parse<T=unknown>(serialized:string) : Promise<T> {
  return new Promise((resolve, reject) => {
    try {
      resolve(JSON.parse(serialized));
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Wraps built-in JSON.stringify() function with a Promise.
 * 
 * @param {Serializable<T>} unserialized
 * 
 * @return {Promise<string>}
 */
function stringify<T=object>(unserialized:Serializable<T>) : Promise<string> {
  return new Promise((resolve, reject) => {
    try {
      resolve(JSON.stringify(unserialized));
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Exports
*/

export const AsyncJSON = { parse, stringify };
