/**
 * Types/Interfaces
*/

export type ComponentStyle = object | Array<object>;
export type ComponentTailwind = string | Array<string> | Array<ComponentTailwind>;

export interface TailwindProps {
  style?: ComponentStyle;
  className?: string;
  tailwind?: ComponentTailwind;
}

/**
 * Functions
*/



/**
 * Namespaced Exports
*/

export const Tailwind = {  };
