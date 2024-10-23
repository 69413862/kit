import { JsonRpcProvider, SuiMoveObject, SuiObject } from '@mysten/sui.js';
import { CoinObject, NftObject } from './types/object';
export declare const SUI_SYSTEM_STATE_OBJECT_ID = "0x0000000000000000000000000000000000000005";
export declare class Provider {
    query: QueryProvider;
    constructor(queryEndpoint: string);
}
export declare class QueryProvider {
    provider: JsonRpcProvider;
    constructor(queryEndpoint: string);
    getActiveValidators(): Promise<SuiMoveObject[]>;
    getOwnedObjects(address: string): Promise<SuiObject[]>;
    getOwnedCoins(address: string): Promise<CoinObject[]>;
    getOwnedNfts(address: string): Promise<NftObject[]>;
    getNormalizedMoveFunction(objectId: string, moduleName: string, functionName: string): Promise<import("@mysten/sui.js").SuiMoveNormalizedFunction>;
}
export declare const DEFAULT_GAS_BUDGET_FOR_SPLIT = 1000;
export declare const DEFAULT_GAS_BUDGET_FOR_MERGE = 500;
export declare const DEFAULT_GAS_BUDGET_FOR_TRANSFER = 100;
export declare const DEFAULT_GAS_BUDGET_FOR_TRANSFER_SUI = 100;
export declare const DEFAULT_GAS_BUDGET_FOR_STAKE = 1000;
export declare const GAS_TYPE_ARG = "0x2::sui::SUI";
export declare const GAS_SYMBOL = "SUI";
export declare const DEFAULT_NFT_TRANSFER_GAS_FEE = 450;
export declare const MINT_EXAMPLE_NFT_MOVE_CALL: {
    packageObjectId: string;
    module: string;
    function: string;
    typeArguments: never[];
    arguments: string[];
    gasBudget: number;
};
