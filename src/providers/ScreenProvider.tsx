/**
 * Global Imports
*/

import React, { ReactNode, createContext, useState } from 'react';

/**
 * Local Imports
*/

import { SetStateHandler } from '~/util/React';

/**
 * Types/Interfaces
*/

export interface ScreenProviderProps {
  children: ReactNode;
}

export interface ScreenContextInterface {
  title: string;
  breadcrumbs: Array<any>;
  setTitle: SetStateHandler<string>;
  setBreadcrumbs: SetStateHandler<Array<any>>;
}

/**
 * Contexts
*/

export const ScreenContext = createContext<ScreenContextInterface>(undefined);

/**
 * Components
*/

export function ScreenProvider(props:ScreenProviderProps) {
  /** States **/

  const [ title, setTitle ] = useState<string>();
  const [ breadcrumbs, setBreadcrumbs ] = useState<Array<any>>();

  /** Output **/

  return (
    <ScreenContext.Provider
      value={{
        title, setTitle,
        breadcrumbs, setBreadcrumbs
      }}
    >
      { props.children }
    </ScreenContext.Provider>
  );
}
