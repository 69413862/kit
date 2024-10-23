import React from "react";
import { IDefaultWallet } from "../types/wallet";
import { Extendable } from '../types/utils';
import { Chain } from "../types/chain";
export type WalletProviderProps = Extendable & {
    defaultWallets?: IDefaultWallet[];
    chains?: Chain[];
    autoConnect?: boolean;
    /**
     * @deprecated use defaultWallets to customize wallet list
     */
    supportedWallets?: any[];
};
export declare const WalletProvider: (props: WalletProviderProps) => React.JSX.Element;
