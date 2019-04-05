import React from "react";
export declare type ModalState = "opening" | "closing" | null;
interface Props {
    onClose: () => void;
    open: boolean;
}
interface State {
    prevOpen: boolean;
    change: ModalState;
}
export declare class MultiSelect extends React.Component<Props, State> {
    constructor(props: any);
    render(): JSX.Element;
}
export {};
