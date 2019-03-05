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
export declare class Modal extends React.Component<Props, State> {
    el: HTMLDivElement;
    root: HTMLBodyElement;
    background: React.RefObject<HTMLDivElement>;
    constructor(props: any);
    componentDidMount(): void;
    handleBackgroundClick: (event: MouseEvent) => void;
    animationEnd: (e: React.AnimationEvent<Element>) => void;
    static getDerivedStateFromProps(nextProps: Props, prevState: State): {
        change: ModalState;
        prevOpen: boolean;
    };
    componentWillUnmount(): void;
    render(): React.ReactPortal;
}
export {};
