function adjacentElementsProduct(inputArray: number[]): number {
    const productArray: number[] = inputArray.map((num: number, index: number) => {
        if (index < inputArray.length - 1) {
            return num * inputArray[index + 1];
        }
    }).filter((num: number) => num !== undefined);
    return Math.max(...productArray);
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21
console.log(adjacentElementsProduct([23, 18, -2, -25, 17, 13])); // 414
console.log(adjacentElementsProduct([6, -12, -5, 2, 3])); // 60
console.log(adjacentElementsProduct([61, 7, -21, -5, 17, 32, 12, -6, 81, 4])); // 544
