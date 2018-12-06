function addAdjacent(arr: number[]): number[] {
    return arr.reduce((a, b, index) => {
        if (a !== [] && index % 2 === 0) {
            return [...a, b + arr[index + 1]];
        }
        return a;
    }, []);
}

function multiplyAdjacent(arr: number[]): number[] {
    return arr.reduce((a, b, index) => {
        if (a !== [] && index % 2 === 0) {
            return [...a, b * arr[index + 1]];
        }
        return a;
    }, []);
}

function checkLength(length: number): boolean {
    if (length === 1) {
        return true;
    } else if (length < 1) {
        return false;
    } else {
        return checkLength(length / 2);
    }
}

function arrayConversion(inputArray: number[]): (number | string) {
    if (checkLength(inputArray.length)) {
        let switchFunc: boolean = true;
        let callback: (arr: number[]) => number[] = addAdjacent;

        while (inputArray.length !== 1) {
            inputArray = callback(inputArray);
            switchFunc = !switchFunc;
            callback = (switchFunc) ? addAdjacent : multiplyAdjacent;
        }
        return inputArray[0];
    } else {
        return "Please enter an array length that can be divided evenly until only one value remains (2, 4, 8, 16)";
    }
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8])); // 186
console.log(arrayConversion([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2])); // 1024
console.log(arrayConversion([2, 4, 6, 8, 10, 12, 14])); // "Please enter an array length... etc"
