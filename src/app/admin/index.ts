/**
 * Global Imports
*/

import { createElement } from 'react';
import { render } from 'react-dom';

/**
 * Local Imports
*/

import { AppConfig } from '~/config/App';
import { EntryPoint } from '~/components/EntryPoint';

/**
 * Sibling Imports
*/

import { LoadingRouter, GuestRouter, UnidentifiedRouter, IdentifiedRouter } from './routers';

/**
 * Start App
*/

render(
  createElement(EntryPoint, { LoadingRouter, GuestRouter, UnidentifiedRouter, IdentifiedRouter }),
  document.getElementById(AppConfig.reactRootElementId)
);
