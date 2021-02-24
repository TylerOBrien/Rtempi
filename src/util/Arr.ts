/**
 * Functions
*/

/**
 * Returns a new array that is a copy of items, except the elements in items
 * that are falsey will be removed.
 * 
 * If an element in items is itself an array then it will be recursively
 * evaluated such that this function guarantees to return a 1-dimensional array
 * regardless of the depth of the array passed.
 * 
 * @param {Array<In>} items
 * 
 * @return {Array<Out>}
 */
function truthies<In=unknown, Out=In>(items:Array<In>):Array<Out> {
  const result:Array<Out> = [];
  const end = items.length;

  for (let i = 0; i < end; i++) {
    if (Array.isArray(items[i])) {
      const children:Array<Out> = truthies(items[i] as unknown as Array<In>);
      if (children.length) {
        result.push(...children);
      }
    } else if (items[i]) {
      result.push(items[i] as unknown as Out);
    }
  }

  return result;
}

/**
 * Exports
*/

export const Arr = { truthies };
