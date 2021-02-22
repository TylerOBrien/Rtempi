/**
 * Global Imports
*/

import React, { ReactNode, createContext, useState } from 'react';

/**
 * Local Imports
*/

import { UserModel } from '~/models'
import { SetStateHandler } from '~/util/React';

/**
 * Types/Interfaces
*/

export interface UserProviderProps {
  children: ReactNode;
}

export interface UserContextInterface {
  user: UserModel;
  setUser: SetStateHandler<UserModel>;
}

/**
 * Contexts
*/

export const UserContext = createContext<UserContextInterface>(undefined);

/**
 * Components
*/

export function UserProvider(props:UserProviderProps) {
  /** States **/

  const [ user, setUser ] = useState<UserModel>();

  /** Output **/

  return (
    <UserContext.Provider value={{ user, setUser }}>
      { props.children }
    </UserContext.Provider>
  );
}
