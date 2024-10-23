import React from 'react';
import { Extendable } from "../../types/utils";
import './index.scss';
export type ConnectModalProps = Extendable & {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
};
export declare const ConnectModal: (props: ConnectModalProps) => React.JSX.Element;
export default ConnectModal;
