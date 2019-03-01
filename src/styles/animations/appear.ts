import { keyframes } from "../../styled";

export const fadeIn = keyframes`
    0%{
    opacity: 1;
}
50%{
    opacity: 0.5;
}
100%{
    display: none;
    opacity: 0;
}
`;
export const fadeOut = keyframes`
    from {opacity: 1}
    to { opacity: 0}
`;
