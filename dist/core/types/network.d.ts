export type Network = {
    id: string;
    name: string;
    queryRpcUrl: string;
};
export interface INetworkApi {
    getNetworks: (enabledOnly: boolean) => Promise<Network[]>;
    getNetwork: (networkId: string) => Network | undefined;
}
export declare enum NetworkType {
    devnet = "devnet",
    local = "local"
}
