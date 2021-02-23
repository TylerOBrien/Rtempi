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

export interface ResourceIndexContextInterface<ResourceInterface> {
  viewing: number;
  resources: Array<ResourceInterface>;
  indices: Array<number>;
  paginate: PaginateOptions;
  sort: SortOptions;
  search: SearchOptions;

  setViewing: SetStateHandler<number>;
  setResources: SetStateHandler<Array<ResourceInterface>>;
  setIndices: SetStateHandler<Array<number>>;
  setPagination: SetStateHandler<PaginateOptions>;
  setSort: SetStateHandler<SortOptions>;
  setSearch: SetStateHandler<SearchOptions>;
}

export interface ResourceIndexProviderProps<ResourceInterface> {
  context: Context<ResourceIndexContextInterface<ResourceInterface>>;
  children: ReactNode;
}

/**
 * Components
*/

export function ResourceIndexProvider<ResourceInterface>(props:ResourceIndexProviderProps<ResourceInterface>) {
  /** States **/

  const [ viewing,    setViewing ]    = useState<number>();
  const [ resources,  setResources ]  = useState<Array<ResourceInterface>>();
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
