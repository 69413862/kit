import { SuiMoveObject } from '@mysten/sui.js';
export type CoinObject = {
    objectId: string;
    symbol: string;
    balance: bigint;
};
export declare class Coin {
    static isCoin(obj: SuiMoveObject): boolean;
    static isSUI(obj: SuiMoveObject): boolean;
    static getCoinObject(obj: SuiMoveObject): CoinObject;
    static getBalance(obj: SuiMoveObject): bigint;
    static getCoinTypeArg(obj: SuiMoveObject): string | null;
    static getCoinSymbol(coinTypeArg: string): string;
    static getCoinTypeFromArg(coinTypeArg: string): string;
}
export type NftObject = {
    objectId: string;
    name: string;
    description: string;
    url: string;
    previousTransaction?: string;
    objectType: string;
};
export declare class Nft {
    static isNft(obj: SuiMoveObject): boolean;
    static getNftObject(obj: SuiMoveObject, previousTransaction?: string): NftObject;
}
