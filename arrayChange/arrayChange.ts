function arrayChange(inputArray: number[]): object {
    let counter = 0;
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] >= inputArray[i + 1]) {
            while (inputArray[i] >= inputArray[i + 1]) {
                inputArray[i + 1]++;
                counter++;
            }
        } else if (inputArray[i] < inputArray[i + 1]) {
            while (inputArray[i] + 1 < inputArray[i + 1]) {
                inputArray[i + 1]--;
                counter++;
            }
        }
    }
    return {
        array: inputArray,
        counter,
    };
}

console.log(arrayChange([1, 1, 1])); // { array: [1, 2, 3], counter: 3}
console.log(arrayChange([-1, 1, 1])); // { array: [-1, 0, 1], counter: 1}
console.log(arrayChange([2, 1, 5])); // { array: [2, 3, 4], counter: 3}

function arrayChange1(inputArray: number[]): object {
    let count: number = 0;
    const changedArray = inputArray.reduce((a: number[], b: number) => {
        const prevNum: number = a[a.length - 1];
        if (prevNum !== undefined && prevNum !== b - 1) {
            const newB: number = prevNum + 1;
            count += Math.abs(b - newB);
            return [...a, newB];
        }
        return [...a, b];
    }, []);
    return {
        array: changedArray,
        counter: count,
    };
}

console.log(arrayChange1([1, 1, 1])); // { array: [1, 2, 3], counter: 3}
console.log(arrayChange1([-1, 1, 1])); // { array: [-1, 0, 1], counter: 1}
console.log(arrayChange1([2, 1, 5])); // { array: [2, 3, 4], counter: 3}
