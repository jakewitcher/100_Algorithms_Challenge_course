function add(num1: number, num2: number): number { // assign type to parameter
    return (num1 + num2);
}

function newArray(a: number, b: number): number[] { // and function return
    return [a, b];
}

// use "tsc plusFileNameHere" to see it compile down to JavaScript
// in a regular javascript file, use "@ts-check" to check types in js file
