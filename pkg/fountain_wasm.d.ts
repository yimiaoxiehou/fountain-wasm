/* tslint:disable */
/* eslint-disable */
export function init_encode(blocksize: number, data: Uint8Array): number;
export function init_encode_from_file(blocksize: number, name: string, mime_type: string, data: Uint8Array): number;
export function next_val(enc: number): Uint8Array;
export function decode_for_file(blocksize: number, data: Uint8Array): any;
export function decode(blocksize: number, data: Uint8Array): Uint8Array;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly init_encode: (a: number, b: number, c: number) => number;
  readonly init_encode_from_file: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => number;
  readonly next_val: (a: number) => [number, number];
  readonly decode_for_file: (a: number, b: number, c: number) => any;
  readonly decode: (a: number, b: number, c: number) => [number, number];
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __externref_table_alloc: () => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
