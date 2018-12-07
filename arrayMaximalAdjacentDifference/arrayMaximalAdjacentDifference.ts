function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    const diffArray: number[] = inputArray.map((num, index) => {
        if (index < inputArray.length - 1) {
            return Math.abs(num - inputArray[index + 1]);
        }
    }).filter((num) => num !== undefined);
    return Math.max(...diffArray);
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0])); // 3
console.log(arrayMaximalAdjacentDifference([10, 4, 17, 6])); // 13
console.log(arrayMaximalAdjacentDifference([-5, 14, -21, 15])); // 36
