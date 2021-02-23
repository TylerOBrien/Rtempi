/**
 * Local
*/

import { AppConfig } from './App';

/**
 * Types/Interfaces
*/

export type StorageSlug = string;

export interface StorageGroups {
  default: string;
}

export interface StorageKeys {
  token: string;
}

export interface StorageNames {
  prefix: string;
  suffix: string;
  delimeter: string;
}

/**
 * Locals
*/

const slug:StorageSlug = process.env.STORAGE_SLUG || AppConfig.slug;

const group:StorageGroups = {
  default: process.env.STORAGE_DEFAULT_GROUP || 'storage'
};

const key:StorageKeys = {
  token: 'token'
};

const name:StorageNames = {
  prefix: process.env.STORAGE_NAME_PREFIX || '@',
  suffix: process.env.STORAGE_NAME_SUFFIX || '',
  delimeter: process.env.STORAGE_NAME_DELIMETER || ':'
};

/**
 * Exports
*/

export const StorageConfig = { slug, group, key, name };
