function ascendingNums(x: number, y: number): number {
    return x - y;
}

function arrayEquals(a: number[], b: number[]): boolean {
    const sortedA = a.sort(ascendingNums);
    const sortedB = b.sort(ascendingNums);

    let counter = 0;
    for (let i = 0; i < a.length; i++) {
        if (sortedA[i] !== sortedB[i]) {
            counter++;
        }
    }
    return (counter === 0);
}

function swapOnce(a: number[], b: number[]): boolean {
    let counter = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            counter++;
        }
    }
    return (counter === 0 || counter === 2);
}

function areSimilar(a: number[], b: number[]): boolean {
    if (a.length !== b.length) {
        return false;
    }
    return swapOnce(a, b) && arrayEquals(a, b);
}

console.log(areSimilar([1, 2, 3], [1, 2, 3])); // true
console.log(areSimilar([1, 2, 3], [2, 1, 3])); // true
console.log(areSimilar([1, 2, 2], [2, 1, 1])); // false
console.log(areSimilar([1, 2, 3], [1, 2, 3, 4])); // false
console.log(areSimilar([1, 2, 3, 4], [2, 1, 4, 3])); // false
console.log(areSimilar([1, 2, 5, 6, 9], [1, 2, 6, 6, 9])); // false
