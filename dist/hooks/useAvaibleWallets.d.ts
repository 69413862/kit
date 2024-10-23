import { IDefaultWallet, IWallet } from "../types";
export declare const useAvailableWallets: (defaultWallets: IDefaultWallet[]) => {
    allAvailableWallets: IWallet[];
    configuredWallets: IWallet[];
    detectedWallets: {
        name: string;
        adapter: import("../types").IWalletAdapter;
        installed: boolean;
        iconUrl: `data:image/svg+xml;base64,${string}` | `data:image/webp;base64,${string}` | `data:image/png;base64,${string}` | `data:image/gif;base64,${string}`;
        downloadUrl: {
            browserExtension: string;
        };
    }[];
};
