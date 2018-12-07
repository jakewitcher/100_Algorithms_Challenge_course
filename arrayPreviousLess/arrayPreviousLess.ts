function arrayPreviousLess(items: number[]): number[] {
    return items.map((num, index) => {
        if (items[index - 1] === undefined || items[index - 1] > num) {
            return -1;
        }
        return items[index - 1];
    });
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5])); // [-1, 3, -1, 2, 4]
console.log(arrayPreviousLess([4, 3, 5, 2, 1, 7, 4, 5, 12])); // [-1, -1, 3, -1, -1, 1, -1, 4, 5]
console.log(arrayPreviousLess([1, 4, 8, 3, 4, 6, 9, 2, 3, 6, 2])); // [-1, 1, 4, -1, 3, 4, 6, -1, 2, 3, -1]
