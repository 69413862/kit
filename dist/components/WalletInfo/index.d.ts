import React from 'react';
import './index.scss';
import { Extendable } from '../../types/utils';
export type ConnectButtonProps = Extendable & {
    label?: string;
    onDisconnect?: () => void;
};
declare function WalletInfo(props: ConnectButtonProps): React.JSX.Element | null;
export default WalletInfo;
