import { IWalletAdapter } from "../types/wallet";
import { ConnectInput, ConnectOutput, EventsListeners, SuiSignAndExecuteTransactionInput, SuiSignAndExecuteTransactionOutput, EventsNames, Wallet } from "@mysten/wallet-standard";
import { ExpSignMessageInput, ExpSignMessageOutput } from "../wallet-standard/features/exp_sign-message";
export declare enum FeatureName {
    STANDARD__CONNECT = "standard:connect",
    STANDARD__DISCONNECT = "standard:disconnect",
    STANDARD__EVENTS = "standard:events",
    SUI__SIGN_AND_TRANSACTION = "sui:signAndExecuteTransaction",
    EXP__SIGN_MESSAGE = "exp:signMessage"
}
/**
 * Wrap the adapter that supports wallet-standard
 * provider universal interfaces to component usage
 */
export declare class WalletAdapter implements IWalletAdapter {
    private standardWalletAdapter;
    constructor(standardWalletAdapter: Wallet);
    get name(): string;
    get icon(): `data:image/svg+xml;base64,${string}` | `data:image/webp;base64,${string}` | `data:image/png;base64,${string}` | `data:image/gif;base64,${string}`;
    get version(): "1.0.0";
    get accounts(): readonly import("@mysten/wallet-standard").WalletAccount[];
    get chains(): import("@mysten/wallet-standard").IdentifierArray;
    get features(): any;
    connect(input: ConnectInput | undefined): Promise<ConnectOutput>;
    disconnect(): Promise<void>;
    on(event: EventsNames, listener: EventsListeners[EventsNames]): () => void;
    signAndExecuteTransaction(input: SuiSignAndExecuteTransactionInput): Promise<SuiSignAndExecuteTransactionOutput>;
    signMessage(input: ExpSignMessageInput): Promise<ExpSignMessageOutput>;
    hasFeature(name: string): boolean;
    private getFeature;
}
