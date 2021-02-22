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

export interface TextProps extends TailwindProps {
  children?: ReactNode;
}

/**
 * Components
*/

export class Text extends Component<TextProps> {
  constructor(props:TextProps) {
    super(props);
  }

  render() : ReactNode {
    return createElement('p', this.props, this.props.children);
  }
}
