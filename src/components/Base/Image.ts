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

export interface ImageProps extends TailwindProps {
  src: string;
  children?: ReactNode;
}

/**
 * Components
*/

export class Image extends Component<ImageProps> {
  constructor(props:ImageProps) {
    super(props);
  }

  render() : ReactNode {
    return createElement('img', this.props, this.props.children);
  }
}
