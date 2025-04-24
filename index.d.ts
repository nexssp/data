import { Stats } from 'fs';

export type DataType =
  | 'object'
  | 'string'
  | 'array'
  | 'number'
  | 'boolean'
  | 'undefined'
  | 'function'
  | 'asyncfunction'
  | 'null'
  | 'map'
  | 'set'
  | 'generatorfunction'
  | 'promise'
  | 'stream'
  | 'file'
  | 'directory'
  | 'dir'
  | 'url'
  | 'json'
  | 'regexp';

export function type(v: any): DataType;
export function is(what: DataType, v: any): boolean;
export function isDirectory(v: string): boolean;
export function isFile(v: string): boolean;
export function isEmpty(v: any): boolean;
export function compare<T>(val1: T | (() => T), val2: T | (() => T) | RegExp, optionalMessages?: any): boolean;
