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

function adjacentElementsProduct2(inputArray: number[]): number {
    const maxProduct: number = inputArray.map((num: number, index: number) => {
        if (index < inputArray.length - 1) {
            return num * inputArray[index + 1];
        }
    }).reduce((a, b) => {
        if (b === undefined || a >= b) {
            return a;
        }
        return b;
    });
    return maxProduct;
}

console.log(adjacentElementsProduct2([3, 6, -2, -5, 7, 3])); // 21
console.log(adjacentElementsProduct2([23, 18, -2, -25, 17, 13])); // 414
console.log(adjacentElementsProduct2([6, -12, -5, 2, 3])); // 60
console.log(adjacentElementsProduct2([61, 7, -21, -5, 17, 32, 12, -6, 81, 4])); // 544

function adjacentElementsProduct3(inputArray: number[]): number {
    const maxProduct: number = inputArray.reduce((a, b, i) => {
        if (inputArray[i + 1] === undefined) {
            return a;
        } else if (i === 1) {
            return a * b;
        } else if (a >= b * inputArray[i + 1]) {
            return a;
        }
        return b * inputArray[i + 1];
    });
    return maxProduct;
}

console.log(adjacentElementsProduct3([3, 6, -2, -5, 7, 3])); // 21
console.log(adjacentElementsProduct3([23, 18, -2, -25, 17, 13])); // 414
console.log(adjacentElementsProduct3([6, -12, -5, 2, 3])); // 60
console.log(adjacentElementsProduct3([61, 7, -21, -5, 17, 32, 12, -6, 81, 4])); // 544
