/**
 * Global Imports
*/

import { FunctionComponent, createElement, useEffect, useState } from 'react';

/**
 * Local Imports
*/

import { useSession } from '~/hooks';

/**
 * Types/Interfaces
*/

export type RouterName = 'loading' | 'guest' | 'unidentified' | 'identified';

export interface UserGuardProps {
  loading: FunctionComponent;
  guest: FunctionComponent;
  unidentified: FunctionComponent;
  identified: FunctionComponent;
}

/**
 * Exports
*/

export function UserGuard(props:UserGuardProps) : JSX.Element {
  /** Hooks **/

  const session = useSession();

  /** States **/

  const [ router, setRouter ] = useState<RouterName>();

  /** Side-Effects **/

  useEffect(() => {
    setRouter(!session.user ? 'guest'
      : session.user.is_identified
        ? 'identified'
        : 'unidentified' );
  }, [ session.user ]);
  
  /** Output **/

  return createElement(props[router || 'loading']);
}
