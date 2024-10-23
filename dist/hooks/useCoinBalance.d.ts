import { Chain } from "../types/chain";
import { Token } from "../constants/token";
export declare function useCoinBalance({ address, symbol, opts, }: {
    address: string;
    symbol?: Token;
    opts: {
        chain?: Chain;
    };
}): {
    balance: string;
    error: any;
    isValidating: boolean;
    loading: boolean;
    getBalance: (symbol: string) => string;
};
