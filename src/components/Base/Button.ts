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

export interface ButtonProps extends TailwindProps {
  type?: string;
  children?: ReactNode;
}

/**
 * Components
*/

export class Button extends Component<ButtonProps> {
  static defaultProps = {
    type: 'button'
  };

  constructor(props:ButtonProps) {
    super(props);
  }

  render() : ReactNode {
    return createElement('button', this.props, this.props.children);
  }
}
