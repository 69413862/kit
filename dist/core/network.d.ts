import { INetworkApi, Network } from './types/network';
declare class NetworkApi implements INetworkApi {
    getNetworks(enabledOnly: boolean): Promise<Network[]>;
    getNetwork(networkId: string): Network;
}
export declare const network: NetworkApi;
export {};
