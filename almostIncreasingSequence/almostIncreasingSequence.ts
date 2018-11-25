function almostIncreasingSequence(sequence: number[]): boolean {
    let count = 0;
    sequence.reduce((a: number, b: number) => {
        if (a >= b) {
            count++;
            return b;
        }
        return b;
    });
    return count <= 1;
}

function almostIncreasingSequence2(sequence: number[]): boolean {
    let count = 0;
    sequence.forEach((n: number, i: number) => {
        if (n >= sequence[i + 1]) {
            count++;
            return n;
        }
        return n;
    });
    return count <= 1;
}

console.log(almostIncreasingSequence([1, 3, 2, 1])); // false
console.log(almostIncreasingSequence([1, 3, 2])); // true
console.log(almostIncreasingSequence([1, 2, 3, 4, 5, 6, 7, 4, 8, 9, 10, 15, 12])); // false

console.log(almostIncreasingSequence2([1, 3, 2, 1])); // false
console.log(almostIncreasingSequence2([1, 3, 2])); // true
console.log(almostIncreasingSequence2([1, 2, 3, 4, 5, 6, 7, 4, 8, 9, 10, 15, 12])); // false
