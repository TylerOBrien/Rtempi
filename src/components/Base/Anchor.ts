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

export interface AnchorProps extends TailwindProps {
  href: string;
  rel?: string;
  children?: ReactNode;
}

/**
 * Components
*/

export class Anchor extends Component<AnchorProps> {
  constructor(props:AnchorProps) {
    super(props);
  }

  render() : ReactNode {
    return createElement('a', this.props, this.props.children);
  }
}
