/**
 * Global Imports
*/

import React, { ReactNode, createContext, useEffect, useState } from 'react';

/**
 * Local Imports
*/

import { SetStateHandler } from '~/util/React';

/**
 * Types/Interfaces
*/

export enum NetInfoStatus {
  Offline,
  MaybeOnline,
  Online
}

export interface NetInfoProviderProps {
  children: ReactNode;
}

export interface NetInfoContextInterface {
  status: NetInfoStatus;
  setStatus: SetStateHandler<NetInfoStatus>;
}

/**
 * Contexts
*/

export const NetInfoContext = createContext<NetInfoContextInterface>(undefined);

/**
 * Provider
*/

export function NetInfoProvider(props:NetInfoProviderProps) {
  /** States **/

  const [ status, setStatus ] = useState<NetInfoStatus>();

  /** Side-Effects **/

  useEffect(() => {
    window.addEventListener('offline', () => setStatus(_ => NetInfoStatus.Offline));
    window.addEventListener('online', () => setStatus(_ => NetInfoStatus.MaybeOnline));
  }, []);

  useEffect(() => {
    if (status === NetInfoStatus.MaybeOnline) {
      //
    }
  }, [ status ]);
  
  /** Output **/
  
  return (
    <NetInfoContext.Provider value={{ status, setStatus }}>
      { props.children }
    </NetInfoContext.Provider>
  );
}
