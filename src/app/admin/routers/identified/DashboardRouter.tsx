/**
 * Global Imports
*/

import React from 'react';

/**
 * Local Imports
*/

import { ShowDashboard } from '~/app/admin/screens/identified/Dashboard';
import { Router } from '~/components/Router';

/**
 * Export Components
*/

export function DashboardRouter() {
  return (
    <Router
      routes={[
        {
          path: '',
          group: 'dashboard',
          component: ShowDashboard
        }
      ]}
    />
  );
}
