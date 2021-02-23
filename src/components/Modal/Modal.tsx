/**
 * Global Imports
*/

import React, { ReactNode, useEffect } from 'react';

/**
 * Local Imports
*/

import { View } from '~/components/Base';
import { Screen } from '~/util';

/**
 * Types/Interfaces
*/

export interface ModalProps {
  visible: boolean;
  children: ReactNode;
}

/**
 * Exports
*/

export function Modal(props:ModalProps) {
  /** Side-Effects **/

  useEffect(() => {
    if (props.visible) {
      Screen.disableScroll();
    } else {
      Screen.enableScroll();
    }
  }, [ props.visible ]);
  
  /** Output **/

  return (
    <View tailwind={[ 'modal transition-opacity duration-200', props.visible ? 'opacity-100' : 'pointer-events-none opacity-0' ]}>
      <View tailwind='opacity-75 absolute w-full h-full bg-black' />
      <View tailwind='absolute flex justify-center items-center w-full h-full'>
        { props.children }
      </View>
    </View>
  );
}
