/**
 * Global Imports
*/

import React, { ReactNode, Context, useState } from 'react';

/**
 * Local Imports
*/

import { SetStateHandler } from '~/util/React';

/**
 * Types/Interfaces
*/

export interface PaginateOptions {
  stride: number;
  current: number;
  total: number;
}

export interface SortOptions {
  by: string;
  order: 'asc' | 'desc';
}

export interface SearchOptions {
  query: string;
  attributes: Array<string>;
}

export interface ResourceIndexProviderProps {
  context: Context<any>;
  children: ReactNode;
}

export interface ResourceIndexContextInterface<T=unknown> {
  viewing: number;
  resources: Array<T>;
  indices: Array<number>;
  paginate: PaginateOptions;
  sort: SortOptions;
  search: SearchOptions;

  setViewing: SetStateHandler<number>;
  setResources: SetStateHandler<Array<T>>;
  setIndices: SetStateHandler<Array<number>>;
  setPagination: SetStateHandler<PaginateOptions>;
  setSort: SetStateHandler<SortOptions>;
  setSearch: SetStateHandler<SearchOptions>;
}

/**
 * Components
*/

export function ResourceIndexProvider<T>(props:ResourceIndexProviderProps) {
  /** States **/

  const [ viewing,    setViewing ]    = useState<number>();
  const [ resources,  setResources ]  = useState<Array<T>>();
  const [ indices,    setIndices ]    = useState<Array<number>>();
  const [ paginate,   setPagination ] = useState<PaginateOptions>();
  const [ sort,       setSort ]       = useState<SortOptions>();
  const [ search,     setSearch ]     = useState<SearchOptions>();
  
  /** Output **/
  
  return (
    <props.context.Provider
      value={{
        viewing,    setViewing,
        resources,  setResources,
        indices,    setIndices,
        paginate,   setPagination,
        sort,       setSort,
        search,     setSearch
      }}
    >
      { props.children }
    </props.context.Provider>
  );
}
