import { JsonRpcProvider } from '@mysten/sui.js';
export type SuiProvider = JsonRpcProvider;
export declare function useSuiProvider(endpoint: string): SuiProvider;
