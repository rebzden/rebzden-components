import React from "react";
interface Props {
    onClose: () => void;
    open: boolean;
}
export declare class Modal extends React.Component<Props> {
    el: HTMLDivElement;
    root: HTMLBodyElement;
    background: React.RefObject<HTMLDivElement>;
    constructor(props: any);
    componentDidMount(): void;
    handleBackgroundClick: (event: MouseEvent) => void;
    componentWillUnmount(): void;
    render(): React.ReactPortal;
}
export {};
