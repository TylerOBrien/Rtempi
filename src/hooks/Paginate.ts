/**
 * Global Imports
*/

import { useState } from 'react';

/**
 * Local Imports
*/

import { SetStateHandler } from '~/util/React';

/**
 * Types/Interfaces
*/

export interface PaginateOptions {
  stride: number;
  total: number;
}

export interface PaginateHook {
  page: number;
  setPage: SetStateHandler<number>;
  pages: number;
  offset: Array<number>;
}

/**
 * Exports
*/

export function usePaginate(options:PaginateOptions) : PaginateHook {
  /** States **/

  const [ page, setPage ] = useState<number>(0);

  /** Output **/

  return {
    page,
    setPage,
    pages: Math.ceil(options.total / options.stride) || 0,
    offset: [
      page * options.stride,
      (page * options.stride) + options.stride
    ]
  };
}
