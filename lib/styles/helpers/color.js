export function getColorBasedOnType(type, theme) {
    return theme.color[type];
}
export function getTextColorBasedOnType(type, theme) {
    return (getColorBasedOnType(type, theme)).text;
}
export function getMainColorBasedOnType(type, theme) {
    return (getColorBasedOnType(type, theme)).main;
}
export function getLightColorBasedOnType(type, theme) {
    return (getColorBasedOnType(type, theme)).light;
}
export function getDarkColorBasedOnType(type, theme) {
    return (getColorBasedOnType(type, theme)).dark;
}
//# sourceMappingURL=color.js.map