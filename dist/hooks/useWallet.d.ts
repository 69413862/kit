/// <reference types="react" />
import { IWallet, IWalletAdapter } from "../types/wallet";
import { SuiSignAndExecuteTransactionInput, SuiSignAndExecuteTransactionOutput, WalletAccount } from "@mysten/wallet-standard";
import { ExpSignMessageOutput } from "../wallet-standard/features/exp_sign-message";
import type { MoveCallTransaction, SuiTransactionResponse } from "@mysten/sui.js";
import { WalletEvent, WalletEventListeners } from "../types/events";
import { Chain } from "../types/chain";
export interface WalletContextState {
    configuredWallets: IWallet[];
    detectedWallets: IWallet[];
    allAvailableWallets: IWallet[];
    chains: Chain[];
    chain: Chain | undefined;
    name: string | undefined;
    adapter: IWalletAdapter | undefined;
    account: WalletAccount | undefined;
    address: string | undefined;
    connecting: boolean;
    connected: boolean;
    status: "disconnected" | "connected" | "connecting";
    select: (walletName: string) => void;
    disconnect: () => Promise<void>;
    getAccounts: () => readonly WalletAccount[];
    signAndExecuteTransaction(transaction: SuiSignAndExecuteTransactionInput): Promise<SuiSignAndExecuteTransactionOutput>;
    signMessage: (input: {
        message: Uint8Array;
    }) => Promise<ExpSignMessageOutput>;
    on: <E extends WalletEvent>(event: E, listener: WalletEventListeners[E]) => () => void;
    /**
     * @deprecated use adapter instead
     */
    wallet: IWalletAdapter | undefined;
    /**
     * @deprecated use allAvailableWallets instead
     */
    supportedWallets: any[];
    /**
     * @deprecated use signAndExecuteTransaction instead
     */
    executeMoveCall: (transaction: MoveCallTransaction) => Promise<SuiTransactionResponse>;
    /**
     * @deprecated use account.publicKey instea
     */
    getPublicKey: () => Promise<Uint8Array>;
}
export declare const WalletContext: import("react").Context<WalletContextState>;
export declare function useWallet(): WalletContextState;
