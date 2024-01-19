export function getCount() {
    const count = localStorage.getItem('clickCount');
    return count ? parseInt(count) : 0;
}
export function setCount(count) {
    localStorage.setItem('clickCount', count.toString());
}
//# sourceMappingURL=store.js.map