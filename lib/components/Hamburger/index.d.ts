/// <reference types="react" />
interface Props {
    open: boolean;
}
export declare const HamburgerIcon: ({ ...rest }: {
    [x: string]: any;
}) => JSX.Element;
export declare const CloseIcon: ({ ...rest }: {
    [x: string]: any;
}) => JSX.Element;
export declare const Hamburger: ({ open, ...rest }: Props) => JSX.Element;
export declare const Arrow: ({ open, ...rest }: Props) => JSX.Element;
export {};
