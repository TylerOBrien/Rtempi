/**
 * Global Imports
*/

import React from 'react';

/**
 * Local Imports
*/

import { Router } from '~/components/Router';
import { UserResourceIndexProvider } from '~/app/admin/providers';
import {
  CreateUser,
  IndexUser,
  ShowUser,
  ShowUser as TwoFactorAuth,
  ShowUser as UserRecovery } from '~/app/admin/screens/identified/User';

/**
 * Types/Interfaces
*/

export interface ShowUserRouterProps {
  //
}

export interface UserRouterProps {
  //
}

/**
 * Local Components
*/

function ShowUserRouter(props:ShowUserRouterProps) {
  return (
    <Router
      routes={[
        {
          path: '/2fa',
          group: 'users',
          component: TwoFactorAuth
        },
        {
          path: '/recovery',
          group: 'users',
          component: UserRecovery
        },
        {
          path: '',
          group: 'users',
          component: ShowUser
        }
      ]}
    />
  );
}

/**
 * Export Components
*/

export function UserRouter(props:UserRouterProps) {
  return (
    <Router
      container={ UserResourceIndexProvider }
      routes={[
        {
          path: '/create',
          group: 'users',
          component: CreateUser
        },
        {
          path: '/:id',
          group: 'users',
          component: ShowUserRouter
        },
        {
          path: '',
          group: 'users',
          component: IndexUser
        }
      ]}
    />
  );
}
