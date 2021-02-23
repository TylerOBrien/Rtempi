/**
 * Global Imports
*/

import React, { Fragment, FunctionComponent, ReactNode } from 'react';
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
  group: string;
  component: RouteComponent<RouteParams>;
}

export interface RouterContainerProps {
  children: ReactNode;
}

export interface RouterProps {
  routes: Array<RouteOptions<unknown>>;
  container: FunctionComponent<RouterContainerProps>;
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


export function Router(props:RouterProps) {
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
