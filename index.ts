/**
 * Global Imports
*/

import { createElement } from 'react';
import { render } from 'react-dom';

/**
 * Local Imports
*/

import { EntryPoint } from '~/components/EntryPoint';

/**
 * Start App
*/

render(createElement(EntryPoint), document.getElementById('root'));
