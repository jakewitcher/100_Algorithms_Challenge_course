function absoluteValuesSumMinimization(a: number[]): number {
    return a.reduce((x, y) => {
        const absSumX = a.reduce((b, c) => {
            return (c > x) ? b + (c - x) : b + -(c - x);
        }, 0);
        const absSumY = a.reduce((d, e) => {
            return (e > y) ? d + (e - y) : d + -(e - y);
        }, 0);
        if (absSumX <= absSumY) {
            return x;
        }
        return y;
    });
}

console.log(absoluteValuesSumMinimization([2, 4, 7])); // 4
console.log(absoluteValuesSumMinimization([2, 4, 7, 6])); // 4
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6])); // 6
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8])); // 6
