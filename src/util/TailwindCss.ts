/**
 * Sibling Imports
*/

import { Arr } from './Arr';

/**
 * Types/Interfaces
*/

export type StyleType = object | Array<object>;
export type TailwindType = string | Array<string> | Array<TailwindType>;
export type TailwindObject = TailwindType | object;

export interface TailwindProps {
  style?: StyleType;
  className?: string;
  tailwind?: TailwindType;
}

export interface StyleFromTailwindProps {
  style?: StyleType;
  className?: string;
}

/**
 * Functions
*/

/**
 * Gets the named child Tailwind object.
 * 
 * If the passed param is not a Tailwind object then it will be assumed to be a
 * className string or an array of className strings.
 * 
 * @param {TailwindObject} tailwind
 * @param {string} name
 * @param {TailwindType} fallback
 * 
 * @return {TailwindType}
 */
function get(tailwind:TailwindObject, name:string = 'container', fallback:TailwindType = undefined) : TailwindType {
  if (Array.isArray(tailwind) || typeof tailwind === 'string') {
    return ( tailwind || fallback );
  }

  return ( tailwind && name in tailwind ) ? tailwind[name] : fallback;
}

/**
 * Merges the extension with the tailwind object. This is roughly equivalent to
 * spreading two Tailwind objects one after another into a new one.
 * 
 * @param {TailwindObject} tailwind
 * @param {object} extension
 * @param {string} fallbackGroup
 * 
 * @return {T}
 */
function merge<T=unknown>(tailwind:TailwindObject, extension:object, fallbackGroup:string = 'container') : T {
  if (typeof tailwind === 'string') {
    tailwind = { [fallbackGroup]: tailwind };
  }

  const newTailwind = Object.assign({}, tailwind);

  for (const key in extension) {
    if (typeof extension[key] === 'object') {
      Object.assign(newTailwind[key], extension[key]);
    }
  }

  return newTailwind as T;
}

/**
 * 
 * 
 * @param {TailwindProps} properties
 * 
 * @return {StyleFromTailwindProps}
 */
function props(properties:TailwindProps) : StyleFromTailwindProps {
  if (!properties.tailwind) {
    return properties;
  } else if (!properties.className && typeof properties.tailwind === 'string') {
    return Object.assign({}, properties, { className: properties.tailwind, tailwind: undefined });
  }

  return Object.assign({}, properties, {
    className: Arr.truthies<TailwindType>([ properties.className, properties.tailwind ]),
    tailwind: undefined
  });
}

/**
 * Namespaced Exports
*/

export const Tailwind = { get, merge, props };
