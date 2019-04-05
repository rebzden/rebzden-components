import { keyframes } from "../../styled";
export const topDown = keyframes `
    from {top: -300px; opacity: 0}
    to {top: 0; opacity: 1}
`;
export const bottomUp = keyframes `
    from {bottom: 0; opacity: 1}
    to {bottom: 300px; opacity: 0}
`;
export const leftRight = keyframes `
    from {left: -300px; opacity: 0}
    to {left: 0; opacity: 1}
`;
export const rightLeft = keyframes `
    from {left: 0}
    to {left: -300px}
`;
//# sourceMappingURL=movement.js.map