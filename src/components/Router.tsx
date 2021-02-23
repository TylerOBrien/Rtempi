/**
 * Global Imports
*/

import React, { Fragment, FunctionComponent } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

/**
 * Types/Interfaces
*/

export interface RouteProps<RouteParams> {
  path: string;
  params?: RouteParams;
}

export type RouteComponent<RouteParams> = FunctionComponent<RouteProps<RouteParams>>;

export interface RouteOptions<RouteParams> {
  path: string;
  component: RouteComponent<RouteParams>;
}

export interface RouterProps<RouteParams> {
  routes: Array<RouteOptions<RouteParams>>;
  container: FunctionComponent;
}

/**
 * Local Components
*/

function HigherOrderRoute<RouteParams>({ component, ...options }:RouteOptions<RouteParams>, props:RouteProps<RouteParams>) {
  return React.createElement(component, { ...options, ...props });
}

/**
 * Exported Components
*/

export function Router<RouteParams>(props:RouterProps<RouteParams>) {
  /** Hooks **/

  const match = useRouteMatch();

  /** Output **/

  return (
    <props.container>
      <Switch>
        {
          props.routes.map((route, index) => (
            <Route
              key={ index }
              component={ HigherOrderRoute.bind(this, route) }
              path={ match.path + (route.path ?? '') }
            />
          ))
        }
      </Switch>
    </props.container>
  );
}

Router.defaultProps = {
  container: Fragment
};
