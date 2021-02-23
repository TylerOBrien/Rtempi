/**
 * Global Imports
*/

import React, { ReactNode, createContext } from 'react';

/**
 * Local Imports
*/

import { UserModel } from '~/models';
import { ResourceIndexContextInterface, ResourceIndexProvider } from '~/providers/ResourceIndexProvider';

/**
 * Types/Interfaces
*/

export interface UserResourceIndexProviderProps {
  children: ReactNode;
}

export interface UserResourceIndexContextInterface extends ResourceIndexContextInterface<UserModel> {
  //
}

/**
 * Contexts
*/

export const UserResourceIndexContext = createContext<UserResourceIndexContextInterface>(undefined);

/**
 * Components
*/

export function UserResourceIndexProvider(props:UserResourceIndexProviderProps) : ReactNode {
  return (
    <ResourceIndexProvider<UserModel> context={ UserResourceIndexContext }>
      { props.children }
    </ResourceIndexProvider>
  );
}
