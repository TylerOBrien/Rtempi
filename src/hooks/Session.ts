/**
 * Global Imports
*/

import { useContext } from 'react';

/**
 * Local Imports
*/

import { SetStateHandler } from '~/util/React';

/**
 * Local Imports
*/

import { UserModel } from '~/models';
import { UserContext } from '~/providers/UserProvider';

/**
 * Types/Interfaces
*/

export interface SessionHook {
  user: UserModel;
  setUser: SetStateHandler<UserModel>;
}

/**
 * Exports
*/

export function useSession() : SessionHook {
  /** Contexts **/
  
  const { user, setUser } = useContext(UserContext);
  
  /** Output **/
  
  return {
    user, setUser
  };
}
