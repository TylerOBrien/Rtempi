/**
 * Global Imports
*/

import React, { useEffect, useState, FunctionComponent } from 'react';

/**
 * Local Imports
*/

/* import { useSession } from '~/hooks'; */

/**
 * Types/Interfaces
*/

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

  //const session = useSession();

  /** States **/

  const [ router, setRouter ] = useState<string>();

  /** Side-Effects **/

  /* useEffect(() => {
    setRouter(!session.user ? 'guest'
      : session.user.is_identified
        ? 'identified'
        : 'unidentified' );
  }, [ session.user ]); */
  
  /** Output **/

  return (
    null
  );
}
