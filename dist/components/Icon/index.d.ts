import React, { CSSProperties, ReactNode } from 'react';
import { Extendable } from '../../types/utils';
export type IconProps = Extendable & {
    icon: string | ReactNode;
    alt?: string;
    onClick?: () => void;
    elClassName?: string;
    elStyle?: CSSProperties;
};
/**
 * Wrap icon such as svg/img
 * with the essential dom properties: onClick, className, style...
 * @constructor
 */
declare const Icon: (props: IconProps) => React.JSX.Element;
export default Icon;
