/**
 * Types/Interfaces
*/

export type AnyCallback<In=unknown, Out=void> = (...args:Array<In>) => Out | Promise<Out>;

/**
 * Locals
*/

/**
 * Higher-order function that will wrap the passed function in a Promise.
 * 
 * @param {AnyCallback<In,Out>} callback
 * 
 * @return {AnyCallback<In,Promise<Out>>}
 */
function promised<In=unknown, Out=void>(callback:AnyCallback<In,Out>) : AnyCallback<In,Promise<Out>> {
  return (...args:Array<In>) : Promise<Out> => new Promise((resolve, reject) => {
    try {
      resolve(callback(...args));
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Delays execution of callback. Primarily only useful to prevent blocking of
 * React Native's UI thread.
 * 
 * @param {AnyCallback<T>} callback
 * 
 * @return {AnyCallback<T>}
 */
function delayed<T=unknown>(callback:AnyCallback<T>) : AnyCallback<T> {
  return (...args:Array<T>) : void => {
    requestAnimationFrame(() => callback(...args));
  };
}

/**
 * Namespaced Exports
*/

export const Functional = { promised, delayed };
