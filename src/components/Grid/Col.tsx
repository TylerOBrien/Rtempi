/**
 * Global Imports
*/

import React, { ReactNode, LegacyRef } from 'react';

/**
 * Local Imports
*/

import { View } from '~/components/Base';
import { Tailwind, TailwindProps } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

export interface ColProps extends TailwindProps {
  ref?: LegacyRef<View>;
  children?: ReactNode;
}

/**
 * Exports
*/

export function Col(props:ColProps) {
  /** Tailwind **/

  const tailwinds = {
    container: Tailwind.get(props.tailwind, 'container')
  };

  /** Output **/

  return (
    <View
      style={ !props.style ? styles.col : [ styles.col, props.style ] }
      tailwind={ tailwinds.container }
      ref={ props.ref }
    >
      { props.children }
    </View>
  );
}

/**
 * Styles
*/

const styles = {
  col: {
    flexDirection: 'column'
  }
};
