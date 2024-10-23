import React, { ReactNode } from 'react';
import { Extendable } from "../../types/utils";
import './index.scss';
export type ConnectButtonProps = Extendable & {
    label?: string;
    children?: ReactNode;
};
export declare const ConnectButton: (props: ConnectButtonProps) => React.JSX.Element;
export default ConnectButton;
