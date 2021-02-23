/**
 * Global Imports
*/

import React from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 * Local Imports
*/

import { ShowAccount } from '~/app/admin/screens/identified/Account';
import { NotFound } from '~/app/admin/screens/identified/Error';

/**
 * Sibling Imports
*/

import { DashboardRouter } from './DashboardRouter';
import { UserRouter } from './UserRouter';

/**
 * Exports
*/

export function IdentifiedRouter() {
  return (
    <Switch>
      <Route path='/' exact component={ DashboardRouter } />
      <Route path='/account' component={ ShowAccount } />
      <Route path='/users' component={ UserRouter } />
      <Route path='' component={ NotFound } />
    </Switch>
  );
}
