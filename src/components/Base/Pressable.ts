/**
 * Global Imports
*/

import { createElement, Component, ReactNode } from 'react';

/**
 * Local Imports
*/

import { TailwindProps } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

export interface PressableProps extends TailwindProps {
  children?: ReactNode;
  onPress?: () => void | Promise<void>;
}

/**
 * Components
*/

export class Pressable extends Component<PressableProps> {
  constructor(props:PressableProps) {
    super(props);
  }

  render() : ReactNode {
    return createElement('div', this.props, this.props.children);
  }
}
