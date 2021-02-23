/**
 * Local Imports
*/

import { AppConfig } from '~/config';

/**
 * Functions
*/

/**
 * @return {void}
 */
function enableScroll() : void {
  const root = document.getElementById(AppConfig.reactRootElementId);

  root.style.marginTop = '0';
  root.style.paddingRight = '0';
  root.style.overflowY = 'auto';
}

/**
 * @return {void}
 */
function disableScroll() : void {
  const root = document.getElementById(AppConfig.reactRootElementId);
  const scrollbarWidth = (window.innerWidth - root.clientWidth);

  root.style.paddingRight = `${ scrollbarWidth }px`;
  root.style.overflowY = 'hidden';
}

/**
 * Exports
*/

export const Screen = { enableScroll, disableScroll };
