/**
 * Global Imports
*/

import React, { Component, ReactNode, createElement, useEffect, useContext, useState } from 'react';

/**
 * Local Imports
*/

import { TailwindProps } from '~/util/TailwindCss';

/**
 * Types/Interfaces
*/

export interface ViewProps extends TailwindProps {
  children?: ReactNode;
}

/**
 * Components
*/

export class View extends Component<ViewProps> {
  constructor(props:ViewProps) {
    super(props);
  }

  render() : ReactNode {
    return createElement('div', this.props, this.props.children);
  }
}
