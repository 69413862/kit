import { IWallet } from "../types";
export declare function useAutoConnect(select: (name: string) => Promise<void>, allAvailableWallets: IWallet[], autoConnect: boolean): void;
