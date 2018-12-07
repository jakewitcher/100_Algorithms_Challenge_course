function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
    return inputArray.map((num) => {
        if (num === elemToReplace) {
            return substitutionElem;
        }
        return num;
    });
}

console.log(arrayReplace([1, 2, 1], 1, 3)); // [3, 2, 3]
console.log(arrayReplace([4, 5, 2, 3, 5, 6], 5, 0)); // [4, 0, 2, 3, 0, 6]
console.log(arrayReplace([7, 9, 7, 5, 4, 7, 3, 7], 7, -4)); // [-4, 9, -4, 5, 4, -4, 3, -4]
