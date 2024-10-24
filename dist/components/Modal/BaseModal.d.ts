import * as React from "react";
import { Extendable } from "../../types/utils";
import { DialogContentProps } from "@radix-ui/react-dialog";
export type BaseModalProps = Extendable & {
    trigger?: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    contentProps?: DialogContentProps;
};
export declare const BaseModal: (props: BaseModalProps) => React.JSX.Element;
