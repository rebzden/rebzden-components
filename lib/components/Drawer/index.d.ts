import React from "react";
interface Props {
    onClose: () => void;
    open: boolean;
}
interface State {
    prevOpen: boolean;
    opening?: boolean;
}
export declare class Drawer extends React.Component<Props, State> {
    el: HTMLDivElement;
    root: HTMLBodyElement;
    background: React.RefObject<HTMLDivElement>;
    constructor(props: any);
    componentDidMount(): void;
    handleBackgroundClick: (event: MouseEvent) => void;
    animationEnd: (e: React.AnimationEvent<Element>) => void;
    static getDerivedStateFromProps(nextProps: Props, prevState: State): {
        opening: boolean | undefined;
        prevOpen: boolean;
    };
    componentWillUnmount(): void;
    render(): React.ReactPortal;
}
export {};
